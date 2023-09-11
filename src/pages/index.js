import BasePageComponent from "@/components/base/BasePageComponent";
import CreateInvoiceMainComponent from "@/components/CreateInvoiceMainComponent";
import getInvoiceNo from "@/utilities/GetInvoiceNo";
import { gql, useQuery } from "@apollo/client";
import Temp from "./Temp";
import HomeMainComponent from "@/components/HomeMainComponent";

const allCountriesQuery = gql`
  query {
    countries {
      id
      name
      code
      crtdAt
      updtdAt
    }
  }
`;
const allStatesForCntryQuery = gql`
  query {
    states_for_cntry {
      id
      name
      code
      crtdAt
      updtdAt
    }
  }
`;

const index = () => {
  /*const { data, loading, error } = useQuery(allStatesForCntryQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  console.log(data);
  if (data) return <p></p>;*/

  return <BasePageComponent pageContent={HomeMainComponent} />;

  // return <BasePageComponent pageContent={Temp} pageProps={null} />;
  // return <Temp />;
};

export default index;
