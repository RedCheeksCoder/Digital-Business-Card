import "./App.css";
import BusinessCard from "./BusinessCard";
import charlie from "./images/charlie.jpg";
import evalyn from "./images/evalyn.jpg";
import james from "./images/james.jpg";
import jlou from "./images/jlou.jpg";
import joan from "./images/joan.jpg";
import joward from "./images/joward.jpg";
import rez from "./images/rez.jpg";
import ruth from "./images/ruth.jpg";
import sarah from "./images/sarah.jpg";
import rolli from "./images/rolli.jpg";
import analou from "./images/analou.jpg";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

const employees = [
  {
    id: 1,
    name: "Belvis, Charlie D.",
    firstName: "Charlie",
    middleName: "D.",
    lastName: "Belvis",
    contact: "+639088636156",
    position: "Sales Engineer",
    email: "charlie.belvis@inzpect.com",
    displayPic: charlie,
  },
  {
    id: 2,
    name: "Bendijo, Joward V.",
    firstName: "Joward",
    middleName: "V.",
    lastName: "Bendijo",
    contact: "+639088923623",
    position: "Sales Engineer",
    email: "joward.bendijo@inzpect.com",
    displayPic: joward,
  },
  {
    id: 3,
    name: "Cariño, Joana Jane M.",
    firstName: "Joana Jane",
    middleName: "M.",
    lastName: "Cariño",
    contact: "+6399088923621",
    position: "Technical Sales",
    email: "joana.carino@inzpect.com",
    displayPic: joan,
  },
  {
    id: 4,
    name: "Dela Cruz, Renz D.",
    firstName: "Renz",
    middleName: "D.",
    lastName: "Dela Cruz",
    contact: "+639088923622",
    position: "Technical Sales",
    email: "renz.delacruz@inzpect.com",
    displayPic: rez,
  },
  {
    id: 5,
    name: "Francisco, Sarah Jane L.",
    firstName: "Sarah Jane",
    middleName: "L.",
    lastName: "Francisco",
    contact: "+639088959060",
    position: "Technical Sales",
    email: "sarah.jane.francisco@inzpect.com",
    displayPic: sarah,
  },
  {
    id: 6,
    name: "Laya, Rolando T.",
    firstName: "Rolando",
    middleName: "T.",
    lastName: "Laya",
    contact: "+639189215744",
    position: "President / Sales & Marketing Manager",
    email: "rolando_laya@inzpect.com",
    displayPic: rolli,
  },
  {
    id: 7,
    name: "Laurenio, Jm Ruth Y.",
    firstName: "Jm Ruth",
    middleName: "Y.",
    lastName: "Laurenio",
    contact: "+639499946485",
    position: "Technical Sales",
    email: "ruth.laurenio@inzpect.com",
    displayPic: ruth,
  },
  {
    id: 8,
    name: "Paculba, Ma. Evalyn M.",
    firstName: "Ma. Evalyn",
    middleName: "M.",
    lastName: "Paculba",
    contact: "+639499946487",
    position: "Technical Sales",
    email: "evalyn.paculba@inzpect.com",
    displayPic: evalyn,
  },
  {
    id: 9,
    name: "Ruiz, Joanah Lou I.",
    firstName: "Joanah Lou",
    middleName: "I.",
    lastName: "Ruiz",
    contact: "+639088959061",
    position: "Technical Sales",
    email: "joanah.ruiz@inzpect.com",
    displayPic: jlou,
  },
  {
    id: 10,
    name: "Santos, James Roy B.",
    firstName: "James Roy",
    middleName: "B.",
    lastName: "Santos",
    contact: "+639088923618",
    position: "Senior Sales Supervisor",
    email: "james.santos@inzpect.com",
    displayPic: james,
  },
  {
    id: 11,
    name: "Tunan, Maria Analou R.",
    firstName: "Maria Analou",
    middleName: "R.",
    lastName: "Tunan",
    contact: "+639499946486",
    position: "Sales Coordinator",
    email: "maria.analou.tunan@inzpect.com",
    displayPic: analou,
  },
];

const imageData = [{ airplane: "./account.png" }];

const EmployeeCardWrapper = () => {
  const { id } = useParams();
  const employee = employees.find((emp) => emp.id === parseInt(id));
  console.log("employee");
  return <BusinessCard employee={employee} imageData={imageData} />;
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="employee/:id" element={<EmployeeCardWrapper />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
