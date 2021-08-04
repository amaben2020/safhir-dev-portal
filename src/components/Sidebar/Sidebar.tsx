
import './sidebar.scss'
import dashboard from './../../images/dashboard.svg'
import pending from './../../images/pendin.svg'
import approved from './../../images/approved.svg'
import unapproved from './../../images/unapproved.svg'
 
const Sidebar = () => {
    return (
        <div className='sidebar'>
     <nav className='sidebar__wrapper'>
    <ul className='sidebar__wrapper-ul'>
     
 
 
  <li className='sidebar__wrapper-li border-bottom'> <img className='sidebar__wrapper-img' src={dashboard} alt="" /> Dashboard </li>
  
  
 


        <h2 className='sidebar-h2'>Applications</h2>
 
        <li className='sidebar__wrapper-li'> <img className='sidebar__wrapper-img' src={unapproved} alt="" /> New/Unapproved</li>
        <li className='sidebar__wrapper-li'> <img className='sidebar__wrapper-img' src={pending} alt="" /> Pending Approval</li>
        <li className='sidebar__wrapper-li'> <img className='sidebar__wrapper-img' src={approved} alt="" />  Approved</li>
      
    </ul>
</nav>
        </div>
    )
}

export default Sidebar
