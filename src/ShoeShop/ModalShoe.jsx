import React from "react";
import { Button, Modal } from "flowbite-react";
import { Table } from "flowbite-react";

import { useState } from "react";

const ModalShoe = (props) => {
  const { openModal, closeModal, selectedShoe } = props;
  return (
    <>
      <Modal show={openModal} onClose={() => closeModal(false)}>
        <Modal.Header>{selectedShoe.name}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <Table>
                <Table.Body className="divide-y">
                  <img src={selectedShoe.image} />
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      alias
                    </Table.Cell>
                    <Table.Cell>{selectedShoe.alias}</Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      description
                    </Table.Cell>
                    <Table.Cell>{selectedShoe.description}</Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      Short description
                    </Table.Cell>
                    <Table.Cell>{selectedShoe.shortDescription}</Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      price
                    </Table.Cell>
                    <Table.Cell>{selectedShoe.price}</Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      quantity
                    </Table.Cell>
                    <Table.Cell>{selectedShoe.quantity}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={() => closeModal(false)}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalShoe;
