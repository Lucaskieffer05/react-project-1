import './Footer.css'

export function Footer ({filters}) {
  // const { filters } = useFilters()
    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }
            {
                /*
                <footer className='footer'>
                <h4>Proyecto de prueba ⚛️ － <span>@lucaskieffer05</span></h4>
                <h5>Shopping Cart con useContext & useReducer</h5>
                </footer>
                */
            }
        </footer>
    )
}
