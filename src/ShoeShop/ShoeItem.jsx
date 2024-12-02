import React from "react";
import { Button, Card } from "flowbite-react";

const ShoeItem = (props) => {
  const { shoe, setOpenModal, setSelectedShoe } = props;
  return (
    <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={shoe.image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {shoe.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {shoe.price}
      </p>

      <Button
        onClick={() => {
          setOpenModal(true);
          setSelectedShoe(shoe);
        }}
      >
        Xem chi tiết
      </Button>
    </Card>
  );
};

export default ShoeItem;
