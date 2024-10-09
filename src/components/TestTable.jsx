import React from "react";

const createTableRow = (question, answer, points, showPoints, isLastRow, isMiddleOrLastRow, isBold, hasPadding) => {
  return (
    <tr>
      <td style={{ borderBottom: isLastRow ? "1px solid black" : "none", fontWeight: isBold ? "bold" : "normal", paddingLeft: hasPadding ? "5px" : "15px" }}>
        {question}
      </td>
      <td style={{ borderBottom: isLastRow ? "1px solid black" : "none", paddingLeft: hasPadding ? "5px" : "15px" }}>
        {answer}
      </td>
      {showPoints && (
        <td
          rowSpan="1"
          style={{
            borderBottom: isMiddleOrLastRow ? "1px solid black" : "none",
            borderTop: "none",
          }}
        >
          {points}
        </td>
      )}
      {!showPoints && <td style={{ borderBottom: isLastRow ? "1px solid black" : "none" }}></td>}
    </tr>
  );
};

const QuestionnaireTable = ({ data }) => {
  const rows = [];

  for (let section in data) {
    let questionAnswers = data[section].questionAnswer;
    let points = data[section].points;
    if (questionAnswers) {
      const middleIndex = Math.floor(questionAnswers.length / 2); // Calculate middle index
      questionAnswers.forEach((qa, index) => {
        const isLastRow = index === questionAnswers.length - 1; // Check if it's the last row
        const isMiddleOrLastRow = questionAnswers.length <= 2 || isLastRow; // Border for middle or last row if length is up to 2
        const showPoints = index === middleIndex; // Show points only for the middle row
        const isBold = qa.parent_id === null; // Check if title should be bold
        const hasPadding = qa.parent_id === null; // Add padding if parent_id is null
        rows.push(
          createTableRow(
            qa.title,
            qa.value,
            showPoints ? points : "", // Points only for the middle row
            showPoints,
            isLastRow,
            isMiddleOrLastRow,
            isBold,
            hasPadding
          )
        );
      });
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Questions Asked</th>
          <th style={{ width: "40%" }}>Answered by the Sales Person</th>
          <th style={{ width: "20%" }}>Points</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default QuestionnaireTable;
