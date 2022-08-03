import styled from "styled-components"
export const StyledWeather = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

font-family: 'Outfit', 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
padding: 70px 0;
width: 100%;
position: relative;
background-color: rgb(79, 78, 78);
color: #fff;

p {
  font-size: 1.6rem;
}

h1 {
  font-size: 6rem;
}

.search {
    text-align: center;
    padding: 1rem;
  }
  
  input {
    padding: .7rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 25px;
    border: 1px solid rgba(255,255,255, 0.8);
    background-color: rgb(54, 53, 53);
    color: #f8f8f8;
  }
  
  ::placeholder {
    color: #f8f8f8;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .top, .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 400px;
    margin-top:50px;
  }

  .feels, .humidity, .wind {
    text-align:center;
    }
  
    .feels p:first-child, .humidity p:first-child, .wind p:first-child {
    font-weight:600;
    }
  



`
