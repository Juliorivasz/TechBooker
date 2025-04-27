import { useEffect, useState } from 'react';
import { useAuthProvider } from '../../context/AuthProvider';
import { AdminGet } from '../../models/admin/AdminGet';
import { getAdminData } from '../../services/adminRequest';
import LoaderModal from '../../components/Loader';

export const TeacherHomeData = () => {
	const { user } = useAuthProvider();

	const [admin, setAdmin] = useState<AdminGet | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getAdmin = async () => {
			if (user?.name) {
				setLoading(true);
				const data = await getAdminData(user.name, user.jwtToken);
				setAdmin(data);
			}
			setLoading(false);
		};

		getAdmin();
	}, [user?.name, user?.jwtToken]);
	return (
		<>
			<LoaderModal show={loading} task='' />
			<div className='bg-gray-100 shadow-md rounded border border-gray-200 px-8 pt-8 pb-8 mb-4 m-8'>
				<h2 className='text-4xl font-medium leading-6 text-sky-600'>Docente</h2>
				<div className='text-xl mt-4 ml-8 text-cyan-600'>
					<p className='pt-2'>Nombre: {admin?.fullName}</p>
					<p className='pt-2'>DNI: {admin?.dni}</p>
					<p className='pt-2'>Email: {admin?.email}</p>
					<p className='pt-2'>
						Contraseña:
						<input
							type='password'
							value={admin?.email ?? ''}
							className='pl-2'
							disabled
						/>
					</p>
				</div>
			</div>
		</>
	);
};
