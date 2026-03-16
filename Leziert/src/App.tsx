
import './App.css'
import Navbar from './components/Navbar'
import { MainLeziert } from './components/MainLeziert';
import { FooterLeziert } from './components/FooterLeziert';
import {FormLeziert} from './components/FormLeziert';

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
