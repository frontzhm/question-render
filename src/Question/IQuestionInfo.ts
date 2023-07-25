export interface IQuestionInfo{
  // 这个是我加的属性
  isSmallQuestion?:boolean;
  questionId?: string;
  parentId?: string;
  structureType?: string;
  parentStructureType?: string;
  structureTypeName?: string;
  questionInfo?: {
    directions?: string;
    analysis?: string;
    stem?:string;
    answer?:any;
    options?:any;
  };
  difficulty?:number;
  answeredCount?:number;
  percentCorrect?:number|string|any;
  questionIndex?: number;
  smallQuestions: IQuestionInfo[];
}

export interface IOption{
  flag: boolean;
  htmlCode: string;
  optCode: string;
  title: string;
}

/* {
  "paperId": "866720405543182337",
  "paperName": "",
  "id": 1704983,
  "questionId": "1032679779101061121",
  "version": "",
  "parentId": "1032679779101061121",
  "questionCode": "1032679779101061121",
  "sysCode": 7,
  "schNumber": "65",
  "schName": "全国",
  "stage": "2",
  "stageName": "小学",
  "subject": "53",
  "subjectName": "英语",
  "grade": "159",
  "gradeName": "五年级",
  "questionType": "",
  "businessType": "",
  "businessTypeName": "",
  "structureType": "cloze",
  "structureTypeName": "完形填空",
  "purpose": 1,
  "questionContent": "完形填空 A week before this term started, Zhou Ziyu, a student from Heilongjiang  got some big(1)　 　.Her school plans to delay(延迟)its start time to8am. She was quite(2)　 　.   practice news advice trouble 1.B 考查名词辨析.A练习；B消息；C建议；D麻烦；根据后面Her school plans to delay (延迟)its start time to8am她的学校计划把上课时间推迟到早上8点 应该是大的消息 故答案是B.   careful patient happy humorous C 考查形容词辨析.A小心；B耐心；C开心；D幽默；根据前面Her school plans to delay (延迟)its start time to8am她的学校计划把上课时间推迟到早上8点 应该是相当地开心 故答案是C. ",
  "questionInfo": {
    "directions": "",
    "analysis": "",
    "stem": "</p><p><b>完形填空</b></p> \n<p>A week before this term started, Zhou Ziyu, a student from Heilongjiang， got some big（1）<u>　</u><u>&nbsp;&nbsp; </u><u>　</u>．Her school plans to delay（延迟）its start time to 8 am. She was quite（2）<u>　</u><u>&nbsp;&nbsp; </u><u>　</u>．</p>"
  },
  "questionProperty": {
    "property": {
      "area": [],
      "reviewStage": [
        {
          "type": 1,
          "value": "1"
        }
      ],
      "year": [
        {
          "type": 1,
          "value": "2019"
        }
      ],
      "purpose": [
        {
          "type": 1,
          "value": "1"
        }
      ],
      "city": [],
      "usage": [
        {
          "type": 1,
          "value": "13"
        }
      ],
      "competeStage": [],
      "source": [],
      "competeType": [],
      "difficulty": [
        {
          "type": 1,
          "value": "1"
        }
      ],
      "score": [
        {
          "type": 2,
          "value": "0"
        }
      ],
      "province": [
        {
          "type": 1,
          "value": "11"
        }
      ],
      "school": [
        {
          "type": 1,
          "value": "65"
        }
      ],
      "classType": [],
      "quarter": []
    },
    "knwIds": [],
    "chapIds": []
  },
  "questionIndex": 8,
  "questionAnswer": "",
  "questionSource": 2,
  "status": 35,
  "difficulty": 1,
  "year": 2019,
  "examType": "13",
  "examArea": "",
  "groupId": "1032679779101061121",
  "questionScore": null,
  "relationType": "",
  "similarityScore": null,
  "creator": "limeng55@xdf.cn",
  "creatorName": "李猛",
  "createTime": "2021-07-13 21:33:32",
  "editor": "limeng55@xdf.cn",
  "editorName": "李猛",
  "editTime": "2021-09-02 02:14:31",
  "isProcessing": null,
  "questionStem": "</p><p><b>完形填空</b></p> \n<p>A week before this term started, Zhou Ziyu, a student from Heilongjiang， got some big（1）<u>　</u><u>&nbsp;&nbsp; </u><u>　</u>．Her school plans to delay（延迟）its start time to 8 am. She was quite（2）<u>　</u><u>&nbsp;&nbsp; </u><u>　</u>．</p>",
  "questionAnalysis": "",
  "questionVersion": 0,
  "highQuality": 0,
  "organizedCount": 0,
  "recordingTime": "2019-01-16 14:08:19",
  "correctionFlag": 0,
  "needSupplement": false,
  "filled": null,
  "mediaIds": [],
  "smallQuestions": [
    {
      "paperId": "866720405543182337",
      "paperName": "",
      "id": 1704984,
      "questionId": "1032679779335942144",
      "version": "",
      "parentId": "1032679779101061121",
      "questionCode": "1032679779335942144",
      "sysCode": 7,
      "schNumber": "65",
      "schName": "全国",
      "stage": "2",
      "stageName": "小学",
      "subject": "53",
      "subjectName": "英语",
      "grade": "159",
      "gradeName": "五年级",
      "questionType": "",
      "businessType": "",
      "businessTypeName": "",
      "structureType": "cloze_single",
      "structureTypeName": "完形填空-小题",
      "purpose": 1,
      "questionContent": "practicenewsadvicetrouble1.B 考查名词辨析.A练习；B消息；C建议；D麻烦；根据后面Her school plans to delay (延迟)its start time to8am她的学校计划把上课时间推迟到早上8点 应该是大的消息 故答案是B.",
      "questionInfo": {
        "directions": "",
        "answer": "B",
        "options": [
          {
            "optCode": "2t9e",
            "htmlCode": "<p><p>&nbsp;practice</p></p>",
            "title": "A",
            "flagAnswer": 0
          },
          {
            "optCode": "nxrt",
            "htmlCode": "<p><p>&nbsp;news</p></p>",
            "title": "B",
            "flagAnswer": 1
          },
          {
            "optCode": "9p6z",
            "htmlCode": "<p><p>&nbsp;advice</p></p>",
            "title": "C",
            "flagAnswer": 0
          },
          {
            "optCode": "4ywc",
            "htmlCode": "<p><p>&nbsp;trouble</p></p>",
            "title": "D",
            "flagAnswer": 0
          }
        ],
        "analysis": "<p>1．B 考查名词辨析．A练习；B消息；C建议；D麻烦；根据后面Her school plans to delay （延迟）its start time to 8&nbsp; am她的学校计划把上课时间推迟到早上8点，应该是大的消息，故答案是B．</p>",
        "stem": "</p><p></p>"
      },
      "questionProperty": {
        "property": {
          "area": [],
          "reviewStage": [
            {
              "type": 1,
              "value": "1"
            }
          ],
          "year": [
            {
              "type": 1,
              "value": "2019"
            }
          ],
          "purpose": [
            {
              "type": 1,
              "value": "1"
            }
          ],
          "city": [],
          "usage": [
            {
              "type": 1,
              "value": "13"
            }
          ],
          "competeStage": [],
          "source": [],
          "competeType": [],
          "difficulty": [
            {
              "type": 1,
              "value": "1"
            }
          ],
          "score": [
            {
              "type": 2,
              "value": "1"
            }
          ],
          "province": [
            {
              "type": 1,
              "value": "11"
            }
          ],
          "school": [
            {
              "type": 1,
              "value": "65"
            }
          ],
          "classType": [],
          "quarter": []
        },
        "knwIds": [],
        "chapIds": []
      },
      "questionIndex": 1,
      "questionAnswer": "B",
      "questionSource": 2,
      "status": 35,
      "difficulty": 1,
      "year": 2019,
      "examType": "13",
      "examArea": "",
      "groupId": "1032679779101061121",
      "questionScore": null,
      "relationType": "",
      "similarityScore": null,
      "creator": "limeng55@xdf.cn",
      "creatorName": "李猛",
      "createTime": "2021-07-13 21:33:32",
      "editor": "limeng55@xdf.cn",
      "editorName": "李猛",
      "editTime": "2021-09-02 02:14:31",
      "isProcessing": null,
      "questionStem": "</p><p></p>",
      "questionAnalysis": "<p>1．B 考查名词辨析．A练习；B消息；C建议；D麻烦；根据后面Her school plans to delay （延迟）its start time to 8&nbsp; am她的学校计划把上课时间推迟到早上8点，应该是大的消息，故答案是B．</p>",
      "questionVersion": 0,
      "highQuality": 0,
      "organizedCount": "",
      "recordingTime": "2019-01-16 14:08:19",
      "correctionFlag": 0,
      "needSupplement": false,
      "filled": null,
      "mediaIds": [],
      "smallQuestions": [],
      "questionFormulas": [],
      "propertyList": [],
      "isQuoted": null,
      "questionImages": [],
      "oldQuestionId": "",
      "questionPropertyName": null,
      "startTime": null,
      "endTime": null,
      "hasCorrected": null,
      "similarityPaperName": "",
      "knowledgeList": [],
      "knwInfos": [],
      "chapterInfos": [],
      "refCount": "",
      "answeredCount": "",
      "percentCorrect": "",
      "sourceRefCount": "",
      "shareFlag": ""
    },
    {
      "paperId": "866720405543182337",
      "paperName": "",
      "id": 1704985,
      "questionId": "1032679779335942145",
      "version": "",
      "parentId": "1032679779101061121",
      "questionCode": "1032679779335942145",
      "sysCode": 7,
      "schNumber": "65",
      "schName": "全国",
      "stage": "2",
      "stageName": "小学",
      "subject": "53",
      "subjectName": "英语",
      "grade": "159",
      "gradeName": "五年级",
      "questionType": "",
      "businessType": "",
      "businessTypeName": "",
      "structureType": "cloze_single",
      "structureTypeName": "完形填空-小题",
      "purpose": 1,
      "questionContent": "carefulpatienthappyhumorousC 考查形容词辨析.A小心；B耐心；C开心；D幽默；根据前面Her school plans to delay (延迟)its start time to8am她的学校计划把上课时间推迟到早上8点 应该是相当地开心 故答案是C.",
      "questionInfo": {
        "directions": "",
        "answer": "C",
        "options": [
          {
            "optCode": "sv3c",
            "htmlCode": "<p><p>careful&nbsp;</p></p>",
            "title": "A",
            "flagAnswer": 0
          },
          {
            "optCode": "g8nu",
            "htmlCode": "<p><p>patient</p></p>",
            "title": "B",
            "flagAnswer": 0
          },
          {
            "optCode": "n296",
            "htmlCode": "<p><p>happy</p></p>",
            "title": "C",
            "flagAnswer": 1
          },
          {
            "optCode": "z7qe",
            "htmlCode": "<p><p>humorous</p></p>",
            "title": "D",
            "flagAnswer": 0
          }
        ],
        "analysis": "<p>C 考查形容词辨析．A小心；B耐心；C开心；D幽默；根据前面Her school plans to delay （延迟）its start time to 8&nbsp; am她的学校计划把上课时间推迟到早上8点，应该是相当地开心，故答案是C．</p>",
        "stem": "</p><p></p>"
      },
      "questionProperty": {
        "property": {
          "area": [],
          "reviewStage": [
            {
              "type": 1,
              "value": "1"
            }
          ],
          "year": [
            {
              "type": 1,
              "value": "2019"
            }
          ],
          "purpose": [
            {
              "type": 1,
              "value": "1"
            }
          ],
          "city": [],
          "usage": [
            {
              "type": 1,
              "value": "13"
            }
          ],
          "competeStage": [],
          "source": [],
          "competeType": [],
          "difficulty": [
            {
              "type": 1,
              "value": "1"
            }
          ],
          "score": [
            {
              "type": 2,
              "value": "1"
            }
          ],
          "province": [
            {
              "type": 1,
              "value": "11"
            }
          ],
          "school": [
            {
              "type": 1,
              "value": "65"
            }
          ],
          "classType": [],
          "quarter": []
        },
        "knwIds": [],
        "chapIds": []
      },
      "questionIndex": 2,
      "questionAnswer": "C",
      "questionSource": 2,
      "status": 35,
      "difficulty": 1,
      "year": 2019,
      "examType": "13",
      "examArea": "",
      "groupId": "1032679779101061121",
      "questionScore": null,
      "relationType": "",
      "similarityScore": null,
      "creator": "limeng55@xdf.cn",
      "creatorName": "李猛",
      "createTime": "2021-07-13 21:33:32",
      "editor": "limeng55@xdf.cn",
      "editorName": "李猛",
      "editTime": "2021-09-02 02:14:31",
      "isProcessing": null,
      "questionStem": "</p><p></p>",
      "questionAnalysis": "<p>C 考查形容词辨析．A小心；B耐心；C开心；D幽默；根据前面Her school plans to delay （延迟）its start time to 8&nbsp; am她的学校计划把上课时间推迟到早上8点，应该是相当地开心，故答案是C．</p>",
      "questionVersion": 0,
      "highQuality": 0,
      "organizedCount": "",
      "recordingTime": "2019-01-16 14:08:19",
      "correctionFlag": 0,
      "needSupplement": false,
      "filled": null,
      "mediaIds": [],
      "smallQuestions": [],
      "questionFormulas": [],
      "propertyList": [],
      "isQuoted": null,
      "questionImages": [],
      "oldQuestionId": "",
      "questionPropertyName": null,
      "startTime": null,
      "endTime": null,
      "hasCorrected": null,
      "similarityPaperName": "",
      "knowledgeList": [],
      "knwInfos": [],
      "chapterInfos": [],
      "refCount": "",
      "answeredCount": "",
      "percentCorrect": "",
      "sourceRefCount": "",
      "shareFlag": ""
    }
  ],
  "questionFormulas": [],
  "propertyList": [],
  "isQuoted": null,
  "questionImages": [],
  "oldQuestionId": "",
  "questionPropertyName": null,
  "startTime": null,
  "endTime": null,
  "hasCorrected": null,
  "similarityPaperName": "",
  "knowledgeList": [],
  "knwInfos": [],
  "chapterInfos": [],
  "refCount": "",
  "answeredCount": "",
  "percentCorrect": "",
  "sourceRefCount": "",
  "shareFlag": ""
  
} */





