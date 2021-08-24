import React from 'react';

interface Props {
  currentIds: Array<any>;
  callbackChange: any;
  questions: any;
}

export const Question = (props: { question: any }) => {
    const { question } = props;
    return (
        <>
            {question.answers && question.answers.length && (
                <optgroup label={question.title}>
                    {question.answers.map((answer: any) => {
                        return (
                            <option key={answer.id} value={answer.id}>
                                {answer.value}
                            </option>
                        );
                    })}
                </optgroup>
            )}
        </>
    );
};

export const AnswersSelect = (props: Props) => {
    const { currentIds, callbackChange, questions } = props;

    function getQuestionsLineList(questions: Array<any>) {
        let questionsList = questions;
        questions.map((question: any) => {
            if (question.answers) {
                question.answers.map((answer: any) => {
                    if (answer.questions) {
                        questionsList = [
                            ...questionsList,
                            ...getQuestionsLineList(answer.questions),
                        ];
                    }
                    return answer;
                });
            }
            return question;
        });
        return questionsList;
    }

    const questionsLineList = getQuestionsLineList(questions);
    return (
        <select onChange={callbackChange} value={currentIds} multiple>
            <option value="">Показывать всегда</option>
            {questionsLineList.map((question: any) => (
                <Question key={question.id} question={question} />
            ))}
        </select>
    );
};
