import { useEffect, useState } from 'react';
import { UserService } from '../../services/UserService';
import { UserAddOne } from './UserAddOne';
import { UserCardGrid } from './UserCardGrid';
import { UsersSearchingForm } from './UsersSearchingForm';
import { UsersTitle } from './UsersTitle';
import { User } from '../../models/User';
import { UserGetMore } from './UserGetMore';
import { showSuccessAlert } from '../../helpers/showGenericAlerts';
import LoaderModal from '../../components/Loader';

const Users = () => {
	const userService = UserService();

	const [users, setUsers] = useState<User[]>([]);
	const [page, setPage] = useState<number>(0);
	const [initialRender, setInitialRender] = useState<boolean>(true);
	const [areThereMore, setAreThereMore] = useState<boolean>(true);
	const [loading, setLoading] = useState(false);

	const getUsers = async () => {
		setLoading(true);
		const newPage = page + 1;
		const response = await userService.getAllUsers(newPage);
		setUsers((prevUsers) =>
			JSON.stringify(prevUsers) !== JSON.stringify(response.content)
				? [...prevUsers, ...response.content]
				: prevUsers,
		);
		setPage(newPage);
		if (response.totalPages - 1 === newPage) {
			setAreThereMore(false);
		}
		setLoading(false);
	};

	const handleMoreUsers = async () => {
		await getUsers();
	};

	const handleDeleteUser = async (dni: string) => {
		await userService.deleteUserByDni(dni);
		showSuccessAlert();
		setPage(0);
		setAreThereMore(true);
		setUsers([]);
	};

	useEffect(() => {
		if (initialRender) {
			setInitialRender(false);
			return;
		}

		if (users.length === 0) {
			const initialize = async () => {
				const response = await userService.getAllUsers(0);
				setUsers((prevUsers) =>
					String(prevUsers) === String(response.content)
						? prevUsers
						: response.content,
				);
				if (response.totalPages - 1 === 0) {
					setAreThereMore(false);
				}
			};
			initialize();
		}
	}, [userService, users, initialRender]);

	return (
		<>
			<LoaderModal show={loading} task='cargando_docentes' />
			<div
				className='
        px-2
        sm:px-6
      '>
				<UsersTitle />
				<UsersSearchingForm />
				<UserCardGrid cards={users} onDeleteUser={handleDeleteUser} />
			</div>

			{areThereMore ? (
				<UserGetMore onClickMoreUsers={handleMoreUsers} />
			) : (
				<></>
			)}
			<UserAddOne />
		</>
	);
};

export { Users };
