import { useEffect, useState } from 'react';
import { Device } from '../../models/Device';
import { DeviceService } from '../../services/ResourceService';
import { InventoryAddOne } from './InventoryAddOne';
import { InventoryCardGrid } from './InventoryCardGrid';
import { InventorySearchingForm } from './InventorySearchingForm';
import { InventoryTitle } from './InventoryTitle';
import { showSuccessAlert } from '../../helpers/showGenericAlerts';
import LoaderModal from '../../components/Loader';

const Inventory = () => {
	const deviceService = DeviceService();

	const [firstRender, setFirstRender] = useState<boolean>(true);
	const [devices, setDevices] = useState<Device[]>([]);
	const [loading, setLoading] = useState(false);

	const handleDeleteDevice = async (id: number) => {
		await deviceService.deleteDeviceById(id);
		showSuccessAlert();
		setDevices([]);
	};

	useEffect(() => {
		if (firstRender) {
			setFirstRender(false);
			return;
		}

		if (devices.length === 0) {
			const initialize = async () => {
				setLoading(true);
				const response = await deviceService.getAllDevices(0);
				console.log(response);
				setDevices((prevDevices) =>
					String(prevDevices) === String(response.content)
						? prevDevices
						: response,
				);
				setLoading(false);
			};
			initialize();
		}
	}, [deviceService, devices, firstRender]);

	return (
		<>
			<div
				className='
        px-2
        sm:px-6
      '>
				<LoaderModal show={loading} task='inventario' />
				<InventoryTitle />
				<InventorySearchingForm categories={[]} />
				<InventoryCardGrid
					cards={devices}
					onDeleteDevice={handleDeleteDevice}
				/>
			</div>

			<InventoryAddOne />
		</>
	);
};

export { Inventory };
