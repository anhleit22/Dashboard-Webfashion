import { Card, Container, Grid, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../fireBaseConfig";
import { product } from "../typeGlobal";
import { ModalAddProduct } from "../components/modal/ModalAddProduct";
import CloseIcon from "@mui/icons-material/Close";

export const Product = () => {
  const [Production, setProduction] = useState<any>();
  useEffect(() => {
    const getAllData = async () => {
      const docRef = doc(db, "/collectionProduction/cTaK4EQRhH7YVirrklNg");
      const targetDoc = await getDoc(docRef);
      let data = targetDoc.data();
      if (data !== undefined) {
        setProduction(data);
      }
    };

    getAllData();
  }, []);
  type propDelete = {
    id: number;
  };
  const handleDelete = (idProduct: propDelete) => {
    const indexToDelete = Production?.listProduct?.findIndex(
      (product: any) => product.id === idProduct.id
    );
    if (indexToDelete !== -1) {
      const updatedList = [...Production.listProduct];
      updatedList.splice(indexToDelete, 1);

      setProduction((prevState: any) => ({
        ...prevState,
        listProduct: updatedList,
      }));
    }
  };
  return (
    <Container>
      <div className="my-[30px] flex justify-between">
        <h2 className="font-bold text-[24px]">Products</h2>
        <ModalAddProduct />
      </div>
      <Grid container spacing={5}>
        {Production?.listProduct?.map((product: product) => (
          <Grid key={product.id} item md={3} sm={6}>
            <Card>
              <div className="group relative cursor-pointer">
                {product.state && (
                  <span className="absolute bg-[#ff5630] m-2 p-[4px] rounded-lg uppercase text-[10px] font-semibold text-[white]">
                    new
                  </span>
                )}
                {product.salestate && (
                  <span className="absolute bg-[#00b8d9] m-2 p-[4px] rounded-lg uppercase text-[10px] font-semibold text-[white] right-[4px]">
                    Sale
                  </span>
                )}
                <img
                  alt="Lehoanganh"
                  className="w-full h-[252px] object-cover"
                  src={product.thumbnail}
                ></img>
                <div className="absolute top-0 right-0 hidden group-hover:block">
                  <IconButton onClick={() => handleDelete({ id: product.id })}>
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              <div className="p-[24px] text-center">
                <h4 className="font-semibold text-[14px]">{product.title}</h4>
                <div className=" mt-[16px] flex justify-between">
                  <span className="flex relative">
                    <div className="w-[15px] h-[15px] bg-[red] rounded-full absolute border border-[white]"></div>
                    <div className="w-[15px] h-[15px] bg-[black] rounded-full absolute right-[-24px] border border-[white]"></div>
                  </span>
                  {product.reducePrice ? (
                    <h6 className="font-bold">
                      <span className="font-semibold line-through text-web-200">
                        {product.price}$
                      </span>
                      &nbsp;{product.sale}$
                    </h6>
                  ) : (
                    <h6 className="font-bold">&nbsp;{product.price}$</h6>
                  )}
                </div>
              </div>
              <div className="flex justify-around items-center py-[10px] bg-primary-200">
                <h3 className="font-bold text-[16px]">Total</h3>
                <span className="font-semibold bg-[white] p-[5px] rounded-2xl">
                  {product.quanlity}
                </span>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
