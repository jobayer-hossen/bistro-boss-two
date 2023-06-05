import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({item}) => {
    const {user}= useContext(AuthContext);
    const [,refetch] = useCart();
    const navigate = useNavigate()
    const {name, image, price, recipe ,_id} = item;
    const handleOrder=(allItem)=>{
        console.log(allItem)
        if(user && user.email){
            const orderItem = {menuItemId : _id , name , image , price , email:user.email} 
            fetch('http://localhost:7000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(orderItem)
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data)
                if(data.insertedId){
                    refetch();
                    Swal.fire(
                        'Good job!',
                        'Your item added',
                        'success'
                      )
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col -center">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={()=>handleOrder(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;