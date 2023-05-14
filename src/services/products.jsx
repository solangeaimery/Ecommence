import {collection, getDocs} from 'firebase/firestore';
import { db } from '../firebase/config.js';
import { useContext } from 'react';

export const getAllProducts = async () => {

	const data = await getDocs(collection(db, 'products'));

	let products = [];

	data.forEach((doc) => {
		products.push({
			...doc.data(),
			id: doc.id,
		});
	});

	return products
;
};