// Complete the function so that it finds the mean of the three scores 
// passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need 
// to check for negative values or values greater than 100.

// solutions

// 1

function getGrade (s1, s2, s3) {
    const avg = (s1 + s2 + s3) / 3 ;
    if (avg <= 100 && avg >= 90) {
      return 'A';
    } else if (avg < 90 && avg >= 80) {
      return 'B';
    } else if (avg < 80 && avg >= 70) {
      return 'C';
    } else if (avg < 70 && avg >= 60) {
      return 'D';
    } else if (avg < 60 && avg >= 0) {
      return 'F';
    }
}


// 2

function getGrade (s1, s2, s3) {
    const avg = (s1 + s2 + s3)/3;
    switch(true) {
      case (avg >= 90):
        return 'A';
      case ( avg >= 80):
        return 'B';
      case ( avg >= 70):
        return 'C';
      case ( avg >= 60):
        return 'D'; 
      default:
        return 'F';   
    }
}


// 3

function getGrade(...grades) {
    const score = grades.reduce((total, grade) => total + grade, 0) / grades.length;
    if (score <= 100 && score >= 90) return 'A'
    if (score < 90 && score >= 80) return 'B'
    if (score < 80 && score >= 70) return 'C'
    if (score < 70 && score >= 60) return 'D'
    return 'F'
}


// 4

function getGrade (s1, s2, s3) {
    const GRADE = ['F','F','F','F','F','F','D','C','B','A','A'];
    return GRADE[(s1 + s2 + s3) / 3 / 10 >> 0];
}


// 5

const getGrade = (s1, s2, s3) => (r = (s1+s2+s3)/3) >= 90 ? 'A' : r >= 80 ? 'B' : r >= 70 ? 'C' : r >= 60 ? 'D' : 'F';