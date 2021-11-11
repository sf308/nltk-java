//Break down paragraph in sentence
const paraToSentence = (paragraph) => {
    let sentences = paragraph.split('.');
    return sentences;
}

//Break down paragraph in words
const paraToWords = (paragraph) => {
    let words = paragraph.split(' ');
    return words;
}

const wordFrequency = (str) => {
    const arr = str.split(' ');
    const counts = {};

    for (const word zaof arr) {
        counts[word] = counts[word] ? counts[word] + 1 : 1;
    }

    return counts;
}

console.log(paraToSentence("NLP enables the computer to interact with humans in a natural manner. It helps the computer to understand the human language and derive meaning from it. NLP is applicable in several problematic from speech recognition, language translation, classifying documents to information extraction. Analyzing movie review is one of the classic examples to demonstrate a simple NLP Bag-of-words model, on movie reviews."));

console.log(wordFrequency("NLP enables the computer to interact with humans in a natural manner."));
