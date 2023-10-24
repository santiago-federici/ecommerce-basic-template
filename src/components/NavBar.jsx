import { Cart } from './Icons'

export function NavBar () {
  return (
    <header className='wrapper principal-header'>
      <img
        className='logo'
        src='https://d22fxaf9t8d39k.cloudfront.net/6125dc30f8b66b8d7ea500d97fc547f5bae762bb7ddf96af87e1e812be0ca0d0249761.png'
        alt=''
      />

      <nav className='pages-nav'>
        <ul>
          <li className='selected'>Home</li>
          <li>Productos</li>
          <li>Quienes somos</li>
          <li>Contacto</li>
          <li className='cart-icon'><Cart /></li>
        </ul>
      </nav>
    </header>
  )
}
