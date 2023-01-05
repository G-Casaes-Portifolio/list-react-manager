import './styles.css'

function Navbar() {

  return (
    <div className='navbar'>
      <div className='nav-container'>
        <div>home</div>
        <div className='dropdown'>
          <div className='dropdown-btn'>
            <div>listas</div>
          </div>
          <div className='dropdown-content'>
            <div>To-do Lists</div>
            <div>Lista de Itens</div>
            <div>Lista com Descrições</div>
          </div>
        </div>
        <div>about</div>
      </div>
    </div>
  )
}

export default Navbar;