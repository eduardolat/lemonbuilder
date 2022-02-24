import PropTypes from 'prop-types'
import {
  Paper,
  Skeleton,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@mui/material'

export const TableSkeleton = ({
  width = '100%',
  height = '100%',
  rowsQty = 30,
  colsQty = 5,
  includeHead = true,
  sx = {}
}) => {
  return (
    <Paper
      sx={{
        width: width,
        height: height,
        boxShadow: 1,
        overflow: 'auto',
        ...sx
      }}
    >
      <TableContainer
        sx={{
          height: height
        }}
      >
        <Table aria-label='Loading table' stickyHeader>
          {
            includeHead && (
              <TableHead>
                <TableRow>
                  {
                [...new Array(colsQty)].map((_, j) => (
                  <TableCell key={j} sx={{ backgroundColor: 'gray.main' }}>
                    <Skeleton />
                  </TableCell>
                ))
              }
                </TableRow>
              </TableHead>
            )
          }
          <TableBody>
            {[...new Array(rowsQty)].map((_, i) => (
              <TableRow
                key={i}
              >
                {
                  [...new Array(colsQty)].map((_, j) => (
                    <TableCell key={j}>
                      <Skeleton />
                    </TableCell>
                  ))
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

TableSkeleton.propTypes = {
  sx: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  rowsQty: PropTypes.number,
  colsQty: PropTypes.number,
  includeHead: PropTypes.bool
}

export default TableSkeleton
