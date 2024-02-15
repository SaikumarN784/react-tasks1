
    const MapUsing=()=>{

        
    var  mydata=[

        {
            username:"sai",
            password:"sai@123"
        }
        
        
        ]

    return(
<div>
        {
            mydata.map((eachdata)=>{
                return (
                    <div>
                    {eachdata.password}
                    </div>
                )
                })
        }
</div>
    )


    }

    export default MapUsing




    