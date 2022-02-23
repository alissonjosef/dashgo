import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";
interface PaginationsProps {
  totalCountOfRegisters: number
  registersPerPage?: number
  currentPage?: number
  onPagechange: (page:number) => void
}
const siblingsCount = 2

function generatePagesArray(from: number, to: number) {
  return [ ...new Array(to - from)]
  .map(( _, index) => {
    return from + index + 1
  })
  .filter(page => page > 0)
}

export function Paginations({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPagechange,
}: PaginationsProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previousPages = currentPage > 1
  ? generatePagesArray(currentPage - 1 - siblingsCount,  currentPage - 1 )
  : []

  const nextPages = currentPage < lastPage
  ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount , lastPage) )
  : []

  return (
    <Stack direction={["column", "row"]}
    spacing="6"
    mt="8"
    justify="space-between"
    align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > ( 1 + siblingsCount) && (
          <>
          
          <PaginationItem  number={1} />

          {currentPage > (2 + siblingsCount) && (<Text color='gray.300' textAlign='center' width='8'>...</Text>)}
          </>
        )}

        {previousPages.length > 0 && previousPages.map( page => {
          return <PaginationItem key={page} number={page} />
        })}
          <PaginationItem  number={currentPage} isCurrent/>

          {nextPages.length > 0 && previousPages.map( page => {
          return <PaginationItem key={page} number={page} />
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
          {(currentPage + 1 + siblingsCount) < lastPage && (<Text color='gray.300' textAlign='center' width='8'>...</Text>)}
          <PaginationItem  number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
