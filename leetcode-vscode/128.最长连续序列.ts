/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 *
 * https://leetcode-cn.com/problems/longest-consecutive-sequence/description/
 *
 * algorithms
 * Medium (54.53%)
 * Likes:    1154
 * Dislikes: 0
 * Total Accepted:    228K
 * Total Submissions: 416.2K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 *
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,3,7,2,5,8,4,6,0,1]
 * 输出：9
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * -10^9
 *
 *
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const SET = new Set<number>(nums);
  const LEN = nums.length;
  let res = 0;
  for (let i = 0; i < LEN; ++i) {
    if (!SET.has(nums[i] - 1)) {
      let longest = 1;
      let current = nums[i];
      while (SET.has(current + 1)) {
        ++longest;
        ++current;
      }
      res = Math.max(res, longest);
    }
  }
  return res;
}
// @lc code=end
