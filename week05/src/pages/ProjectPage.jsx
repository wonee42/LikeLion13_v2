import Header from "../components/header/Header";
import styled from "styled-components";
import project1 from "../assets/images/Project1.jpg";
import project2 from "../assets/images/Project2.jpg";
import project3 from "../assets/images/Project3.jpg";
import project4 from "../assets/images/Project4.jpg";
import project5 from "../assets/images/Project5.jpg";
import project6 from "../assets/images/Project6.jpg";
import project7 from "../assets/images/Project7.jpg";
import project8 from "../assets/images/Project8.jpg";


export default function ProjectPage() {
  return (
    <>
      <Header />
      <MainContainer>
        <Section>
          <TopText>2025 서경대학교 아이디어톤의 프로젝트 파일입니다. 클릭하여 상세한 정보를 확인하세요!</TopText>
          <StrongText>모아 놓으니 더 예쁘네요.다들 너무 수고하셨습니다!</StrongText>
        </Section>
        <ImageSection>
          <ImageSection>
            <Image src={project1} alt="Project 1" />
            <Image src={project2} alt="Project 2" />
            <Image src={project3} alt="Project 3" />
            <Image src={project4} alt="Project 4" />
            <Image src={project5} alt="Project 5" />
            <Image src={project6} alt="Project 6" />
            <Image src={project7} alt="Project 7" />
            <Image src={project8} alt="Project 8" />
        </ImageSection>

        </ImageSection>
        <Section>
        </Section>
      </MainContainer>
    </>
  );
}



const MainContainer = styled.div`
  padding: 80px 100px;
  background: #fff;
`;

const Section = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const TopText = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
`;

const StrongText = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const ImageSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  width: fit-content;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: block;
`;
