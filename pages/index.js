import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Good from '@components/Good'
import GoodCarousel from '@components/GoodCarousel'
import LMenu from '@components/LMenu'

const props = 
[[
  {name:"Номер процессора",value:"i5-10400F"},
  {name:"Дата выпуска",value:"Q2'20"},
  {name:"Количество ядер",value:"6"},
  {name:"Количество потоков",value:"12"},
  {name:"Базовая частота",value:"2,90 GHz"}
],
[
  {name:"Номер процессора",value:"i5-10400F"},
  {name:"Дата выпуска",value:"Q2'20"},
  {name:"Количество ядер",value:"6"},
  {name:"Количество потоков",value:"12"},
  {name:"Базовая частота",value:"2,90 GHz"}
],
[
  {name:"Сокет",value:"AM4"},
  {name:"Количество ядер",value:"6"},
  {name:"Количество потоков",value:"12"},
  {name:"Базовая частота",value:"3,6GHz"}
],
[
  {name:"Сокет",value:"AM4"},
  {name:"Количество ядер",value:"8"},
  {name:"Количество потоков",value:"16"},
  {name:"Базовая частота",value:"3,6GHz"}
],
[
  {name:"Тип памяти",value:"DDR4"},
  {name:"Форм-фактор",value:"UDIMM"},
  {name:"Ёмкость",value:"16Гб"},
  {name:"Частота",value:"3200MHz"},
  {name:"Латентность",value:"CL17"},
  {name:"Напряжение",value:"1,35"}
],
[
  {name:"Тип памяти",value:"DDR3"},
  {name:"Форм-фактор",value:"DIMM"},
  {name:"Ёмкость",value:"4Гб"},
  {name:"Число планок",value:"2"},
  {name:"Частота",value:"1333MHz"},
  {name:"Латентность",value:"CL9"},
  {name:"Напряжение",value:"1,5"}
],
[
  {name:"Тест при отсутствии",value:"изображения"},
  {name:"kappa",value:"pakka"},
  {name:"kappa",value:"pakka"}
],
];

const Home=()=>{
  return <div className="container">
      <Head>
        <title>CvR!</title>
        <link rel="icon" href="/text-logo.ico" />
      </Head>
      <main>
        <Header title="Товары" />
        <LMenu />
        <div className='thin-scroll-bar' style={{
          "gridArea":"c",
          "overflowY":"scroll"
      }}>
          <Header title="Витрина 1" />
          <GoodCarousel>
            <Good img='/good1.jpg' props ={props[0]}/>
            <Good img='/good2.jpg' props ={props[1]}/>
            <Good img='/good3.jpg' props ={props[2]}/>
            <Good img='/good4.png' props ={props[3]}/>
            <Good img='/good5.jpg' props ={props[4]}/>
            <Good img='/good6.jpg' props ={props[5]}/>
            <Good img='/good7.jpg' props ={props[6]}/>
          </GoodCarousel>
          <Header title="Витрина 2" />
          <GoodCarousel>
            <Good img='/good7.jpg' props ={props[0]}/>
            <Good img='/good6.jpg' props ={props[1]}/>
            <Good img='/good5.jpg' props ={props[2]}/>
            <Good img='/good4.png' props ={props[3]}/>
            <Good img='/good3.jpg' props ={props[4]}/>
            <Good img='/good2.jpg' props ={props[5]}/>
            <Good img='/good1.jpg' props ={props[6]}/>
          </GoodCarousel>
          <p className="description">
            <code>дальше делать лень</code>
          </p>
        </div>
      </main>
        
      <Footer/>
    </div>
}
export default Home;