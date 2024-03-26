export const getProof = function (index, merkle_tree) {
  index = Number(index);
  let proof = [];

  let currentIndex = index;
  for (let i = 0; i < Object.keys(merkle_tree).length - 1; i++) {
    // get proof except root
    if (currentIndex % 2 === 0) {
      proof.push(merkle_tree[i][currentIndex + 1]); // right node
    } else {
      proof.push(merkle_tree[i][currentIndex - 1]); // left node
    }
    currentIndex = Math.floor(currentIndex / 2);
  }
  return proof;
};
