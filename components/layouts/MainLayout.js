import Header1 from '../Header/Header1/Header1'
import Header2 from '../Header/Header2/Header2'
import Header3 from '../Header/Header3/Header3'

export default function MainLayout(props){
  return(<div className="fixed-nav transparent-nav">
    <Header3 />
    <main >{props.children}</main>
    <footer>This is the Footer</footer>
  </div>)
}