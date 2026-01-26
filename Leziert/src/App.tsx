
import './App.css'
import Navbar from './componets/Navbar'
import { MainLeziert } from './componets/MainLeziert';
import { FooterLeziert } from './componets/FooterLeziert';
import {FormLeziert} from './componets/FormLeziert';

export default function App() {
  return ( 
    <>
    <Navbar />
    <MainLeziert />
    <FormLeziert />
    <FooterLeziert />
    </>
  )
}
