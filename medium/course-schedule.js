/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * 
 * https://leetcode.com/problems/course-schedule/submissions/
 * Space O(v + e)
 * Time O(v + e)
 * Notes: Use the djacency list and perform a topological sort on the values to relate the edges and vertices.
 */
var canFinish = function (numCourses, prerequisites) {
  let courseMap = {};

  for (let [course, preReq] of prerequisites) {
    if (course in courseMap) {
      courseMap[course].push(preReq);
    } else {
      courseMap[course] = [preReq];
    }
  }

  let visited = {};
  let cycle = {};

  for (let course of Object.keys(courseMap)) {
    if (dfs(course) === false) {
      return false;
    }
  }

  return true;

  function dfs(c) {
    if (c in cycle) {
      return false;
    }

    if (c in visited) {
      return true;
    }

    if (!(c in courseMap)) {
      return true;
    }

    cycle[c] = c;

    for (let preReq of courseMap[c]) {
      if (dfs(preReq) === false) {
        return false;
      }
    }

    delete cycle[c];
    visited[c] = c;

    return true;
  }
};
