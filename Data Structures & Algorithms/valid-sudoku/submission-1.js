class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

const rows =  Array.from({length:9},()=>new Set());
const cols =  Array.from({length:9},()=>new Set());
const box = Array.from({length:9},()=>new Set());


for(let row = 0;row<9;row++){
  for(let col=0;col<9;col++){
    if(board[row][col] === '.') continue
    let value = board[row][col];
    // Check in row,col & box
    const b = Math.floor(row / 3) * 3 + Math.floor(col / 3)
    if(rows[row].has(value) || cols[col].has(value) || box[b].has(value)) return false;
    rows[row].add(value)
    cols[col].add(value)
    box[b].add(value)
  }
}
return true;

    }
}
