/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) return 0
  const queue = [root] // queue 생성
  let maxDepth = 0

  while(queue.length) { // queue에 요소가 있을때 실행
      const size = queue.length
      maxDepth++ 
      
      for(let i = 0; i < size; i++) {
          const node = queue.shift() // queue의 첫번째 값
          
          if(node.left) queue.push(node.left)
          if(node.right) queue.push(node.right)
      }
  }
  return maxDepth
};