import React from 'react'

function Rent() {
  return (
    <div>
        {/* SECCION PRESENTACION */}
        <section className='box_rent'>
            <div className='container'>
                <div className='left_container'>
                    <h1>La forma más fácil de hacerse cargo de un contrato de una renta</h1>
                    <p>Vives en Barranquilla y quiere viajar por toda Colombia?</p>
                    <div className='inputs_rent'>
                        <div className='div_car_model'>
                            <label htmlFor="">Car Model</label>
                            <input type="text" />
                        </div>
                        <div className='div_max_amount'>
                            <label htmlFor="">Max Amount</label>
                            <input type="text" />
                        </div>
                        <div className='div_model_year'>
                            <label htmlFor="">Model year</label>
                            <input type="text" placeholder=''/>
                        </div>
                        <div className='div_button'>
                            <button>Search</button>
                        </div>
                    </div>
                </div>
                <div className='image_container'>
                    <img src="https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Rent