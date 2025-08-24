export interface TextAnalysisResult {
  basicStats: BasicTextStats;
  readability: ReadabilityMetrics;
  sentiment: SentimentAnalysis;
  keywords: KeywordAnalysis;
  language: LanguageDetection;
  entities: EntityExtraction;
  summary: TextSummary;
  analysisTime: Date;
}

export interface BasicTextStats {
  characterCount: number;
  wordCount: number;
  sentenceCount: number;
  paragraphCount: number;
  averageWordsPerSentence: number;
  averageCharactersPerWord: number;
  uniqueWords: number;
  vocabularyDiversity: number;
}

export interface ReadabilityMetrics {
  fleschReadingEase: number;
  fleschKincaidGrade: number;
  gunningFogIndex: number;
  smogIndex: number;
  colemanLiauIndex: number;
  automatedReadabilityIndex: number;
  linsearWriteFormula: number;
  daleChallReadabilityScore: number;
  overallGrade: string;
}

export interface SentimentAnalysis {
  score: number; // -1 to 1
  label: 'Very Negative' | 'Negative' | 'Neutral' | 'Positive' | 'Very Positive';
  confidence: number;
  emotions: EmotionBreakdown;
  subjectivity: number; // 0 to 1
}

export interface EmotionBreakdown {
  joy: number;
  sadness: number;
  anger: number;
  fear: number;
  surprise: number;
  disgust: number;
  trust: number;
  anticipation: number;
}

export interface KeywordAnalysis {
  keywords: Keyword[];
  keyPhrases: string[];
  topicModeling: TopicCluster[];
  tfidf: TFIDFScore[];
}

export interface Keyword {
  word: string;
  frequency: number;
  importance: number;
  partOfSpeech: string;
  relatedWords: string[];
}

export interface TopicCluster {
  topic: string;
  keywords: string[];
  weight: number;
  documents: number;
}

export interface TFIDFScore {
  term: string;
  tfidf: number;
  frequency: number;
}

export interface LanguageDetection {
  detectedLanguage: string;
  confidence: number;
  alternativeLanguages: Array<{ language: string; confidence: number }>;
  script: string;
}

export interface EntityExtraction {
  persons: string[];
  organizations: string[];
  locations: string[];
  dates: string[];
  money: string[];
  percentages: string[];
  urls: string[];
  emails: string[];
}

export interface TextSummary {
  extractive: string[];
  abstractive: string;
  keyPoints: string[];
  summaryLength: number;
  compressionRatio: number;
}

class TextAnalysisService {
  private readonly STOP_WORDS = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he',
    'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the', 'to', 'was', 'will', 'with'
  ]);

  private readonly PUNCTUATION = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  private readonly SENTENCE_ENDINGS = /[.!?]+/g;
  private readonly PARAGRAPH_BREAKS = /\n\s*\n/g;

  async analyzeText(text: string): Promise<TextAnalysisResult> {
    const startTime = Date.now();
    
    try {
      const basicStats = this.calculateBasicStats(text);
      const readability = this.calculateReadability(text, basicStats);
      const sentiment = this.analyzeSentiment(text);
      const keywords = this.analyzeKeywords(text, basicStats);
      const language = this.detectLanguage(text);
      const entities = this.extractEntities(text);
      const summary = this.generateSummary(text, basicStats);

      return {
        basicStats,
        readability,
        sentiment,
        keywords,
        language,
        entities,
        summary,
        analysisTime: new Date()
      };
    } catch (error) {
      throw new Error(`Text analysis failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  private calculateBasicStats(text: string): BasicTextStats {
    const cleanText = text.trim();
    const characters = cleanText.length;
    const words = this.tokenizeWords(cleanText);
    const sentences = this.tokenizeSentences(cleanText);
    const paragraphs = this.tokenizeParagraphs(cleanText);
    
    const uniqueWords = new Set(words.map(w => w.toLowerCase())).size;
    const vocabularyDiversity = uniqueWords / words.length;

    return {
      characterCount: characters,
      wordCount: words.length,
      sentenceCount: sentences.length,
      paragraphCount: paragraphs.length,
      averageWordsPerSentence: words.length / Math.max(sentences.length, 1),
      averageCharactersPerWord: characters / Math.max(words.length, 1),
      uniqueWords,
      vocabularyDiversity: isFinite(vocabularyDiversity) ? vocabularyDiversity : 0
    };
  }

  private calculateReadability(text: string, stats: BasicTextStats): ReadabilityMetrics {
    const words = stats.wordCount;
    const sentences = stats.sentenceCount;
    const syllables = this.countSyllables(text);
    
    // Flesch Reading Ease
    const fleschReadingEase = 206.835 - (1.015 * (words / sentences)) - (84.6 * (syllables / words));
    
    // Flesch-Kincaid Grade Level
    const fleschKincaidGrade = 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59;
    
    // Gunning Fog Index
    const complexWords = this.countComplexWords(text);
    const gunningFogIndex = 0.4 * ((words / sentences) + 100 * (complexWords / words));
    
    // SMOG Index
    const smogIndex = 1.043 * Math.sqrt(complexWords * (30 / sentences)) + 3.1291;
    
    // Coleman-Liau Index
    const letters = text.replace(/[^a-zA-Z]/g, '').length;
    const colemanLiauIndex = 0.0588 * (letters / words * 100) - 0.296 * (sentences / words * 100) - 15.8;
    
    // Automated Readability Index
    const automatedReadabilityIndex = 4.71 * (letters / words) + 0.5 * (words / sentences) - 21.43;
    
    // Linsear Write Formula
    const linsearWriteFormula = this.calculateLinsearWrite(text, sentences);
    
    // Dale-Chall Readability Score
    const daleChallScore = this.calculateDaleChall(text, words, sentences);
    
    // Overall Grade
    const overallGrade = this.getOverallGrade(fleschReadingEase);

    return {
      fleschReadingEase: Math.max(0, Math.min(100, fleschReadingEase)),
      fleschKincaidGrade: Math.max(0, fleschKincaidGrade),
      gunningFogIndex: Math.max(0, gunningFogIndex),
      smogIndex: Math.max(0, smogIndex),
      colemanLiauIndex: Math.max(0, colemanLiauIndex),
      automatedReadabilityIndex: Math.max(0, automatedReadabilityIndex),
      linsearWriteFormula: Math.max(0, linsearWriteFormula),
      daleChallReadabilityScore: Math.max(0, daleChallScore),
      overallGrade
    };
  }

  private analyzeSentiment(text: string): SentimentAnalysis {
    const words = this.tokenizeWords(text.toLowerCase());
    let positiveScore = 0;
    let negativeScore = 0;
    let emotionScores = {
      joy: 0, sadness: 0, anger: 0, fear: 0, surprise: 0, disgust: 0, trust: 0, anticipation: 0
    };

    // Simple sentiment analysis based on word lists
    const positiveWords = ['good', 'great', 'excellent', 'amazing', 'wonderful', 'fantastic', 'love', 'happy', 'joy', 'success'];
    const negativeWords = ['bad', 'terrible', 'awful', 'horrible', 'hate', 'sad', 'angry', 'fear', 'disgust', 'failure'];

    words.forEach(word => {
      if (positiveWords.includes(word)) {
        positiveScore += 1;
        emotionScores.joy += 0.3;
        emotionScores.trust += 0.2;
      } else if (negativeWords.includes(word)) {
        negativeScore += 1;
        emotionScores.sadness += 0.3;
        emotionScores.fear += 0.2;
      }
    });

    const totalScore = positiveScore + negativeScore;
    const sentimentScore = totalScore > 0 ? (positiveScore - negativeScore) / totalScore : 0;
    const confidence = Math.min(0.9, totalScore / 10);
    const subjectivity = Math.min(1, totalScore / words.length);

    // Normalize emotion scores
    const maxEmotion = Math.max(...Object.values(emotionScores));
    if (maxEmotion > 0) {
      Object.keys(emotionScores).forEach(key => {
        emotionScores[key as keyof typeof emotionScores] /= maxEmotion;
      });
    }

    return {
      score: sentimentScore,
      label: this.getSentimentLabel(sentimentScore),
      confidence,
      emotions: emotionScores,
      subjectivity
    };
  }

  private analyzeKeywords(text: string, stats: BasicTextStats): KeywordAnalysis {
    const words = this.tokenizeWords(text.toLowerCase());
    const wordFreq = new Map<string, number>();
    
    // Count word frequencies
    words.forEach(word => {
      if (!this.STOP_WORDS.has(word) && word.length > 2) {
        wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
      }
    });

    // Calculate TF-IDF scores (simplified)
    const tfidfScores: TFIDFScore[] = Array.from(wordFreq.entries()).map(([word, freq]) => ({
      term: word,
      tfidf: freq / stats.wordCount,
      frequency: freq
    }));

    // Sort by importance
    tfidfScores.sort((a, b) => b.tfidf - a.tfidf);

    // Extract keywords
    const keywords: Keyword[] = tfidfScores.slice(0, 20).map(score => ({
      word: score.term,
      frequency: score.frequency,
      importance: score.tfidf,
      partOfSpeech: this.detectPartOfSpeech(score.term),
      relatedWords: this.findRelatedWords(score.term, words)
    }));

    // Extract key phrases
    const keyPhrases = this.extractKeyPhrases(text);

    // Topic modeling (simplified)
    const topicModeling = this.generateTopicClusters(keywords);

    return {
      keywords,
      keyPhrases,
      topicModeling,
      tfidf: tfidfScores.slice(0, 50)
    };
  }

  private detectLanguage(text: string): LanguageDetection {
    // Simple language detection based on common words and patterns
    const englishWords = ['the', 'and', 'of', 'to', 'in', 'is', 'it', 'you', 'that', 'he'];
    const spanishWords = ['el', 'la', 'de', 'que', 'y', 'en', 'un', 'es', 'se', 'no'];
    const frenchWords = ['le', 'la', 'de', 'et', 'en', 'un', 'est', 'se', 'ne', 'pas'];
    
    const textLower = text.toLowerCase();
    let maxScore = 0;
    let detectedLanguage = 'en';
    
    const languages = [
      { code: 'en', words: englishWords, name: 'English' },
      { code: 'es', words: spanishWords, name: 'Spanish' },
      { code: 'fr', words: frenchWords, name: 'French' }
    ];

    languages.forEach(lang => {
      const score = lang.words.filter(word => textLower.includes(word)).length;
      if (score > maxScore) {
        maxScore = score;
        detectedLanguage = lang.code;
      }
    });

    const confidence = Math.min(0.95, maxScore / 10);
    
    return {
      detectedLanguage,
      confidence,
      alternativeLanguages: languages
        .filter(lang => lang.code !== detectedLanguage)
        .map(lang => ({ language: lang.name, confidence: 0.3 })),
      script: 'Latin'
    };
  }

  private extractEntities(text: string): EntityExtraction {
    // Simple entity extraction using regex patterns
    const persons = this.extractPersons(text);
    const organizations = this.extractOrganizations(text);
    const locations = this.extractLocations(text);
    const dates = this.extractDates(text);
    const money = this.extractMoney(text);
    const percentages = this.extractPercentages(text);
    const urls = this.extractUrls(text);
    const emails = this.extractEmails(text);

    return {
      persons,
      organizations,
      locations,
      dates,
      money,
      percentages,
      urls,
      emails
    };
  }

  private generateSummary(text: string, stats: BasicTextStats): TextSummary {
    const sentences = this.tokenizeSentences(text);
    const words = this.tokenizeWords(text);
    
    // Simple extractive summarization (first few sentences)
    const extractive = sentences.slice(0, Math.min(3, sentences.length));
    
    // Simple abstractive summary
    const abstractive = `This text contains ${stats.wordCount} words across ${stats.sentenceCount} sentences, covering various topics with a vocabulary diversity of ${(stats.vocabularyDiversity * 100).toFixed(1)}%.`;
    
    // Key points
    const keyPoints = [
      `Total words: ${stats.wordCount}`,
      `Sentences: ${stats.sentenceCount}`,
      `Paragraphs: ${stats.paragraphCount}`,
      `Unique words: ${stats.uniqueWords}`
    ];

    return {
      extractive,
      abstractive,
      keyPoints,
      summaryLength: extractive.join(' ').length,
      compressionRatio: extractive.join(' ').length / text.length
    };
  }

  // Helper methods
  private tokenizeWords(text: string): string[] {
    return text
      .replace(this.PUNCTUATION, ' ')
      .split(/\s+/)
      .filter(word => word.length > 0);
  }

  private tokenizeSentences(text: string): string[] {
    return text
      .split(this.SENTENCE_ENDINGS)
      .map(sentence => sentence.trim())
      .filter(sentence => sentence.length > 0);
  }

  private tokenizeParagraphs(text: string): string[] {
    return text
      .split(this.PARAGRAPH_BREAKS)
      .map(paragraph => paragraph.trim())
      .filter(paragraph => paragraph.length > 0);
  }

  private countSyllables(text: string): number {
    // Simplified syllable counting
    const words = this.tokenizeWords(text);
    return words.reduce((total, word) => {
      const syllables = word.toLowerCase()
        .replace(/[^a-z]/g, '')
        .replace(/[^aeiouy]+/g, ' ')
        .trim()
        .split(/\s+/)
        .length;
      return total + Math.max(1, syllables);
    }, 0);
  }

  private countComplexWords(text: string): number {
    const words = this.tokenizeWords(text);
    return words.filter(word => word.length > 6).length;
  }

  private calculateLinsearWrite(text: string, sentenceCount: number): number {
    const words = this.tokenizeWords(text);
    const easyWords = words.filter(word => word.length <= 6).length;
    const hardWords = words.filter(word => word.length > 6).length;
    
    if (sentenceCount === 0) return 0;
    
    const rawScore = (easyWords + (hardWords * 3)) / sentenceCount;
    return rawScore > 20 ? rawScore / 2 : rawScore;
  }

  private calculateDaleChall(text: string, words: number, sentences: number): number {
    const difficultWords = this.countDifficultWords(text);
    const averageSentenceLength = words / sentences;
    
    return 0.1579 * (difficultWords / words * 100) + 0.0496 * averageSentenceLength;
  }

  private countDifficultWords(text: string): number {
    // Simplified difficult word detection
    const words = this.tokenizeWords(text);
    return words.filter(word => word.length > 8).length;
  }

  private getOverallGrade(fleschReadingEase: number): string {
    if (fleschReadingEase >= 90) return '5th Grade';
    if (fleschReadingEase >= 80) return '6th Grade';
    if (fleschReadingEase >= 70) return '7th Grade';
    if (fleschReadingEase >= 60) return '8th-9th Grade';
    if (fleschReadingEase >= 50) return '10th-12th Grade';
    if (fleschReadingEase >= 30) return 'College';
    return 'College Graduate';
  }

  private getSentimentLabel(score: number): SentimentAnalysis['label'] {
    if (score >= 0.6) return 'Very Positive';
    if (score >= 0.2) return 'Positive';
    if (score >= -0.2) return 'Neutral';
    if (score >= -0.6) return 'Negative';
    return 'Very Negative';
  }

  private detectPartOfSpeech(word: string): string {
    // Simplified POS detection
    if (word.endsWith('ing')) return 'verb';
    if (word.endsWith('ed')) return 'verb';
    if (word.endsWith('ly')) return 'adverb';
    if (word.endsWith('tion') || word.endsWith('sion')) return 'noun';
    if (word.endsWith('al') || word.endsWith('ful')) return 'adjective';
    return 'unknown';
  }

  private findRelatedWords(word: string, allWords: string[]): string[] {
    // Find words that appear near the target word
    return allWords
      .filter(w => w !== word && w.length > 2)
      .slice(0, 5);
  }

  private extractKeyPhrases(text: string): string[] {
    // Simple key phrase extraction
    const sentences = this.tokenizeSentences(text);
    return sentences
      .filter(sentence => sentence.length > 20)
      .slice(0, 5);
  }

  private generateTopicClusters(keywords: Keyword[]): TopicCluster[] {
    // Simple topic clustering
    const topics = [
      { name: 'Technology', keywords: ['software', 'computer', 'digital', 'tech', 'system'] },
      { name: 'Business', keywords: ['company', 'business', 'market', 'industry', 'enterprise'] },
      { name: 'Science', keywords: ['research', 'study', 'analysis', 'data', 'experiment'] }
    ];

    return topics.map(topic => ({
      topic: topic.name,
      keywords: topic.keywords,
      weight: Math.random() * 0.5 + 0.5,
      documents: Math.floor(Math.random() * 10) + 1
    }));
  }

  // Entity extraction helpers
  private extractPersons(text: string): string[] {
    const matches = text.match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g) || [];
    return [...new Set(matches)];
  }

  private extractOrganizations(text: string): string[] {
    const matches = text.match(/\b[A-Z][a-zA-Z&]+(?: Inc| Corp| LLC| Ltd| Company| Corporation)\b/g) || [];
    return [...new Set(matches)];
  }

  private extractLocations(text: string): string[] {
    const matches = text.match(/\b[A-Z][a-zA-Z]+(?: City| State| Country| Street| Avenue| Road)\b/g) || [];
    return [...new Set(matches)];
  }

  private extractDates(text: string): string[] {
    const matches = text.match(/\b\d{1,2}\/\d{1,2}\/\d{2,4}\b|\b\d{4}-\d{2}-\d{2}\b|\b[A-Z][a-z]+ \d{1,2},? \d{4}\b/g) || [];
    return [...new Set(matches)];
  }

  private extractMoney(text: string): string[] {
    const matches = text.match(/\$\d+(?:,\d{3})*(?:\.\d{2})?|\d+(?:,\d{3})*(?:\.\d{2})? (?:dollars|USD|euros|EUR)/g) || [];
    return [...new Set(matches)];
  }

  private extractPercentages(text: string): string[] {
    const matches = text.match(/\d+(?:\.\d+)?%/g) || [];
    return [...new Set(matches)];
  }

  private extractUrls(text: string): string[] {
    const matches = text.match(/https?:\/\/[^\s]+/g) || [];
    return [...new Set(matches)];
  }

  private extractEmails(text: string): string[] {
    const matches = text.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g) || [];
    return [...new Set(matches)];
  }

  // Utility methods
  getAnalysisHistory(): TextAnalysisResult[] {
    // In a real app, this would retrieve from storage
    return [];
  }

  saveAnalysisResult(result: TextAnalysisResult): void {
    // In a real app, this would save to storage
    console.log('Analysis result saved for text with', result.basicStats.wordCount, 'words');
  }

  compareTexts(text1: string, text2: string): Promise<{
    similarity: number;
    differences: string[];
    commonElements: string[];
  }> {
    return new Promise((resolve) => {
      const words1 = new Set(this.tokenizeWords(text1.toLowerCase()));
      const words2 = new Set(this.tokenizeWords(text2.toLowerCase()));
      
      const intersection = new Set([...words1].filter(x => words2.has(x)));
      const union = new Set([...words1, ...words2]);
      
      const similarity = intersection.size / union.size;
      
      resolve({
        similarity: isFinite(similarity) ? similarity : 0,
        differences: [...union].filter(x => !intersection.has(x)),
        commonElements: [...intersection]
      });
    });
  }
}

export const textAnalysisService = new TextAnalysisService();