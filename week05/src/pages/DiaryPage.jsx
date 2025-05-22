import Header from "../components/header/Header";
import styled from "styled-components";
import diary1     from "../assets/images/Diary1.png";
import diary2     from "../assets/images/Diary2.png";
import diary3     from "../assets/images/Diary3.png";
import diary4     from "../assets/images/Diary4.png";
import diary5     from "../assets/images/Diary5.png";
import diary6     from "../assets/images/Diary6.png";
import diary7     from "../assets/images/Diary7.png";
import diary8     from "../assets/images/Diary8.png";
import diary9     from "../assets/images/Diary9.png";


export default function DiaryPage() {
  return (
    <>
      <Header />
      <MainContainer>
        <Section>
          <TopText>2025 서경대학교 아이디어톤의 소감을 적는 곳 입니다. 여러분이 느꼈던 모든 것을 적어주세요!</TopText>
          <StrongText>이미지를 올리셔도 됩니다. 배치도 자유롭게 설졍할 수 있어요! 방명록이라고 편하게 생각 부탁함~ </StrongText>
        </Section>
        <ImageSection>
          <Image src={diary1} alt="Diary 1" />
          <Image src={diary2} alt="Diary 2" />
          <Image src={diary3} alt="Diary 3" />
          <Image src={diary4} alt="Diary 4" />
          <Image src={diary5} alt="Diary 5" />
          <Image src={diary6} alt="Diary 6" />
          <Image src={diary7} alt="Diary 7" />
          <Image src={diary8} alt="Diary 8" />
          <Image src={diary9} alt="Diary 9" />
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
  font-size: 18px;
  margin-bottom: 8px;
`;

const StrongText = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const ImageSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: block;
`;