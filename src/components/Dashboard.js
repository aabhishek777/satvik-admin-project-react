import axios from "axios";
import {useEffect,useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import MusicRequestForm from "./MusicRequestForm";
import Graph from "./Graph";

const Dashboard = () => {
	const [adminData,setAdminData] = useState({});

	const [check,setCheck] = useState(false)
	const data = useSelector((state) => state?.login);
	const dispatch = useDispatch();
	useEffect(() => {
		getAdminDetails();
	},[data]);
	const getAdminDetails = async () => {
		try {
			const response = await axios.get(
				`https://stg.dhunjam.in/account/admin/${data?.login?.data?.id}`
			);
			setAdminData(response?.data);
			dispatch({type: 'ADMIN_DATA',payload: response?.data?.data});
			console.log('adminData',adminData);
			setCheck(true)
		} catch(error) {
			console.error('Error fetching admin details:',error);
		}
	};

	const updatePrice = async () => {
		try {
			await axios.put(
				`https://stg.dhunjam.in/account/admin/${data?.login?.data?.id}`,
				{
					amount: {
						category_6: 5,
					},
				}
			);
			getAdminDetails();

		} catch(error) {
			console.log(error);
		}
	};

	return (
		<div className="container">
			<div className="container">
			Dashboard
			<button onClick={updatePrice}>updatePrice</button>
			<MusicRequestForm />
			{check && <Graph />}
			</div>
		</div>
	);
};

export default Dashboard;
