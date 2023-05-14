// prisma/seed.ts

import { PrismaClient } from '@prisma/client'
import ReadCountries_States_Cities_Data from '../my_mstr_data/read_cntry_state_city_data';

const prisma = new PrismaClient()

async function main() {

  let countries_states_cities_jsondata = ReadCountries_States_Cities_Data()
  let {countries, states, cities} = countries_states_cities_jsondata;

  states = states.map((state) => {
    return {
      id: state.id,
      name: state.name,
      code: state.code,
      cNTRY_MSTRCntry_id: state.cntry_id
    }
  })

  cities = cities.map((city) => {
    return {
      id: city.id,
      name: city.name,
      sTATE_MSTRState_id: city.state_id,
      cNTRY_MSTRCntry_id: city.cntry_id
    }
  })

  await prisma.cNTRY_MSTR.createMany({
    data: countries
  })

  await prisma.sTATE_MSTR.createMany({
    data: states
  })

  await prisma.cITY_MSTR.createMany({
    data: cities
  })

}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })