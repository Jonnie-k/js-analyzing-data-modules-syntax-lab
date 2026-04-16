// 1. Define the function with a rest parameter (...arrays)
// to handle an undetermined number of array inputs.
function combineUsers(...arrays) {
  
  // 2. Use the spread operator to flatten all input arrays into one.
  // This merges [ ['user1'], ['user2', 'user3'] ] into ['user1', 'user2', 'user3']
  const mergedUsers = [].concat(...arrays);

  // 3. Create a date string for the merge_date property.
  const today = new Date().toLocaleDateString();

  // 4. Return the object with the specific keys required by the rubric.
  return {
    users: mergedUsers,
    merge_date: today
  };
}

// Keep the existing code below this line to ensure the tests run
module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};