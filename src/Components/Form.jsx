import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../Services/Features/Cart/cartSlice";
import FormInput from "../Components/FormInput";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to left, rgb(192, 192, 191), rgb(252, 253, 171))
    right;
`;

const FormContent = styled.form`
  background-color: white;
  padding: 1vw 3vw;
  border-radius: 1vw;
  border: 0.5vw solid;
  border-color: #ffd90f #fce98d #ffd90f #fce98d;
`;

const Title = styled.h1`
  color: #ffd90f;
  text-align: center;
  font-size: 1.5vw;
  font-weight: bolder;
`;

const Button = styled.button`
  width: 100%;
  height: 4vw;
  padding: 1vw;
  border: none;
  background-color: #ffd90f;
  color: grey;
  font-weight: bold;
  border-radius: 0.5vw;
  font-size: 1vw;
  cursor: pointer;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
`;

const Form = () => {
  const [values, setValues] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const inputs = [
    {
      id: 1,
      name: "id",
      type: "text",
      placeholder: "id",
      label: "Id",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "name",
      label: "Name",
      required: true,
    },
    {
      id: 3,
      name: "description",
      type: "text",
      placeholder: "description",
      label: "Description",
      required: true,
    },
    {
      id: 4,
      name: "price",
      type: "text",
      placeholder: "price",
      label: "Price",
      required: true,
    },
    {
      id: 5,
      name: "image",
      type: "text",
      label: "image",
      required: true,
    },
  ];

  //   const hadleSubmit = (e) => {
  //     e.preventDefault();

  //     console.log(values);
  //   };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(values));
    navigate("/cart");

    console.log(values)
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Container>
        <FormContent /* onSubmit={hadleSubmit} */ onSubmit={handleAddToCart}>
          <Title>CONTACT</Title>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <Button>Submit</Button>
        </FormContent>
      </Container>
    </div>
  );
};

export default Form;
