import styled from "styled-components";
import website from "./images/website.png";
import briefcase from "./images/briefcase.png";
import facebook from "./images/facebook.png";
import mail from "./images/mail.png";
import phone2 from "./images/phone2.png";
import vCard from "vcards-js";

//=====================VCF====================
const Container = styled.div`
  max-width: 420px;
  min-width: 300px;
  margin: auto;
  padding: 1rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: " Inter ", sans-serif;
  box-sizing: border-box;
  background-color: rgb(251, 221, 0);
  border: 2px solid #f8f4f4;
  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
`;
const Body = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: #f8f4f4;
  border: 2px solid #8f8f8f;
`;
const Footer = styled.div``;
const ContactIcons = styled.div``;
const AddToContact = styled.a`
  font-family: " Inter ", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b465b;
  color: white;
  font-size: 15px;
  font-weight: 500;
  width: 150px;
  height: 50px;
  margin-bottom: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
`;
const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
`;
const Title = styled.h5`
  font-size: 0.8rem;
  font-weight: 300;
  padding: 0.3rem 0 1.5rem 0;
  color: gray;
`;

const StyledImage = styled.img`
  margin: 2rem 0 1rem 0;
`;

const Contact = styled.div`
  font-family: " Inter ", sans-serif;
  background-color: #f8f4f4;
  font-size: 0.4rem;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  margin: 1rem;
  h4 {
    color: #808080;
  }
  border-bottom: 10px;
`;

const Info = styled.p`
  p {
    box-sizing: border-box;
    max-width: 380px;
    font-size: large;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
  }
  h4 {
    font-size: 0.8rem;
  }
`;
const Icon = styled.img`
  padding-right: 1rem;
`;
const BusinessCard = ({ employee }) => {
  if (!employee) return <div>Employee not found</div>;

  const vcf = vCard();
  vcf.firstName = employee.firstName;
  vcf.middleName = employee.middleName;
  vcf.lastName = employee.lastName;
  vcf.cellphone = employee.contact;
  vcf.organization = employee.company;
  vcf.email = employee.email;
  vcf.role = employee.position;

  //   vcf.saveToFile(`./${employee.firstName}.vcf`);

  //console.log(vcf.getFormattedString());
  const fileName = employee.firstName.toLowerCase().replace(/\s+/g, "");
  //console.log(fileName);
  return (
    <>
      <Container>
        <Header>
          <StyledImage
            src={employee.displayPic}
            alt={employee.name}
            height={150}
            width={150}
          />
          <Name>{employee.name}</Name>
          <Title>{employee.position}</Title>

          <AddToContact href={`/${fileName}.vcf`} download>
            <p>Add to Contacts</p>
          </AddToContact>
          <ContactIcons></ContactIcons>
        </Header>
        <Body>
          <Contact>
            <Icon src={phone2} alt={employee.contact} height={30} width={30} />
            <Info>
              <p>{employee.contact}</p>
              <h4>Mobile</h4>
            </Info>
          </Contact>
          <Contact>
            <Icon src={mail} alt={employee.email} height={30} width={30} />
            <Info>
              <p>{employee.email}</p>
              <h4>Email</h4>
            </Info>
          </Contact>
          <Contact>
            <Icon
              src={briefcase}
              alt="Description of image"
              height={30}
              width={30}
            />
            <Info>
              <p>Inzpect Technologies, Inc.</p>
              <h4>Company</h4>
            </Info>
          </Contact>
          <Contact>
            <Icon
              src={website}
              alt="Description of image"
              height={30}
              width={30}
            />
            <Info>
              <p>https://web.inzpect.com/</p>
              <h4>Website</h4>
            </Info>
          </Contact>
          <Contact>
            <Icon
              src={facebook}
              alt="Description of image"
              height={30}
              width={30}
            />
            <Info>
              <a
                href="https://www.facebook.com/inzpectech"
                target="_blank"
                rel="noopener noreferrer">
                www.facebook.com/inzpectech
              </a>
              <h4>Facebook page</h4>
            </Info>
          </Contact>
        </Body>
        <Footer></Footer>
      </Container>
    </>
  );
};
export default BusinessCard;
