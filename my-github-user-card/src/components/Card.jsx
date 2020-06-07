import React from "react";
import { Flex } from "../App";

const Card = (props) => {
  console.log(props);
  return (
    <Flex>
      <div>
        <img
          width="150"
          height="150"
          src={props.user.avatar_url}
          alt="A github user"
        />
        <p>{props.user.name}</p>
      </div>

      {props.followers.map((item) => (
        <div key={item.id}>
          <img
            width="300"
            height="300"
            src={item.avatar_url}
            alt="A github user"
          />
          <p>{item.login}</p>
        </div>
      ))}
    </Flex>
  );
};

export default Card;
