// Example JS for future enhancements (pagination, dynamic timetable, etc.)
document.addEventListener('DOMContentLoaded', function() {
 // You can add your JS here for interactivity.
 // For instance, changing the week's timetable:
 const weekRange = document.getElementById('week-range');
 const prevBtn = document.getElementById('prev-week');
 const nextBtn = document.getElementById('next-week');
 let currentWeekIndex = 0;
 const weeks = [
 'October 9 - 13, 2023',
 'October 16 - 20, 2023',
 'October 23 - 27, 2023'
 ];
 prevBtn.addEventListener('click', function() {
 if(currentWeekIndex > 0) {
 currentWeekIndex--;
 weekRange.textContent = weeks[currentWeekIndex];
 }
 });
 nextBtn.addEventListener('click', function() {
 if(currentWeekIndex < weeks.length - 1) {
 currentWeekIndex++;
 weekRange.textContent = weeks[currentWeekIndex];
 }
 });
});