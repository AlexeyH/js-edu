/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let focus_value = config[focus];
      let total_hours = 800;
      if (knowsProgramming == false)
        total_hours += 500;
      
      return Math.ceil(total_hours / focus_value);
      // return 0;
  };
  