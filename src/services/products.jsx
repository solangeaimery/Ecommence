import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { db } from '../firebase/config.js'

export const getAllProducts = async () => {
  const data = await getDocs(collection(db, 'products'))

  let products = []

  data.forEach((doc) => {
    products.push({
      ...doc.data(),
      id: doc.id,
    })
  })

  return products
}

export const createOrder = async (order) => {
  console.log(order)
  await setDoc(doc(db, 'orders', self.crypto.randomUUID()), order)
}

export const getOneProduct = async (id) => {
  const ref = doc(db, 'products', id)
  const productSnap = await getDoc(ref)
  if (productSnap.exists()) {
    const product = productSnap.data()
    return product
  }
}
