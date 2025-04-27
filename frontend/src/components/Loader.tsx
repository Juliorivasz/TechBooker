import React from 'react';

interface LoaderModalProps {
	show: boolean | undefined;
	task: string;
}

const LoaderModal: React.FC<LoaderModalProps> = ({ show, task = '' }) => {
	if (!show) return null;

	const getLoadingText = () => {
		switch (task) {
			case 'registro_institucion':
				return 'Registrando institución...';
			case 'inicio_sesion':
				return 'Iniciando sesión...';
			case 'cargando_docentes':
				return 'Cargando docentes...';
			case 'guardando_docentes':
				return 'Guardando docente...';
			case 'inventario':
				return 'Mostrando inventario...';
			case 'gestion_inventario':
				return 'Actualizando inventario...';
			case 'nueva_reserva':
				return 'Guardando reservación...';
			case 'modificar_reserva':
				return 'Modificando reservación...';
			case 'eliminar_reserva':
				return 'Eliminando reservación...';
			case 'reservas':
				return 'Consultando reservas...';
			case 'cierre_sesion':
				return 'Cerrando sesión...';
			default:
				return 'Cargando datos...';
		}
	};

	return (
		<div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm'>
			<div className='flex flex-col items-center p-8 bg-white bg-opacity-80 rounded-2xl shadow-2xl border border-white/30'>
				<div className='w-16 h-16 mb-6 border-4 border-sky-400 border-t-orange-400 rounded-full animate-spin-slow'></div>
				<span className='text-sky-700 text-lg font-semibold tracking-wide animate-fadeIn text-center'>
					{getLoadingText()}
				</span>
			</div>
		</div>
	);
};

export default LoaderModal;
