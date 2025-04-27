import React, { useEffect, useState } from 'react';
import { AdminHomeTitle } from './AdminHomeTitle';
import { AdminHomeData } from './AdminHomeData';
import AdminHomeButton from './AdminHomeButton';
import { useNavigate } from 'react-router-dom';
import { getAdminData } from '../../services/adminRequest';
import { getInstitutionData } from '../../services/institutionRequest';
import { useAuthProvider } from '../../context/AuthProvider';
import { AdminGet } from '../../models/admin/AdminGet';
import { InstitutionGet } from '../../models/admin/InstitutionGet';
import LoaderModal from '../../components/Loader';

const AdminDashboard: React.FC = () => {
	const navigate = useNavigate();
	const { user } = useAuthProvider();

	const [admin, setAdmin] = useState<AdminGet | null>(null);
	const [institution, setInstitution] = useState<InstitutionGet | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchAdminAndInstitution = async () => {
			if (user?.name && user?.jwtToken) {
				setLoading(true);
				const adminData = await getAdminData(user.name, user.jwtToken);
				setAdmin(adminData);

				if (adminData?.nameSchool) {
					const institutionData = await getInstitutionData(
						adminData.nameSchool,
						user.jwtToken,
					);
					setInstitution(institutionData);
				}
				setLoading(false);
			}
		};

		fetchAdminAndInstitution();
	}, [user?.name, user?.jwtToken]);

	return (
		<React.Fragment>
			<LoaderModal show={loading} task='' />
			<AdminHomeTitle>{institution?.name ?? 'Cargando...'}</AdminHomeTitle>
			<AdminHomeData admin={admin} institution={institution} />
			<AdminHomeButton
				onClick={() => navigate('/edit-admin-profile')}
				text='Editar Perfil'
			/>
		</React.Fragment>
	);
};

export { AdminDashboard };
