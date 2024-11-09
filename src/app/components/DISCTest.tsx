'use client'

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    id: 1,
    traits: [
      { text: "Enthusiastic: hăng hái, nhiệt tình, say mê", type: "I" },
      { text: "Daring: táo bạo, cả gan", type: "D" },
      { text: "Diplomatic: có tài ngoại giao", type: "S" },
      { text: "Satisfied: dễ thỏa mãn", type: "C" }
    ]
  },
  {
    id: 2,
    traits: [
      { text: "Cautious: thận trọng, cẩn trọng", type: "C" },
      { text: "Determined: quả quyết, kiên quyết", type: "D" },
      { text: "Convincing: có sức thuyết phục", type: "I" },
      { text: "Good natured: có tính thiện, bản chất tốt", type: "S" }
    ]
  },
  {
    id: 3,
    traits: [
      { text: "Friendly: thân thiện", type: "I" },
      { text: "Accurate: chính đáng, xác đáng", type: "C" },
      { text: "Outspoken: nói thẳng, trực tính", type: "D" },
      { text: "Calm: điềm tĩnh", type: "S" }
    ]
  },
  {
    id: 4,
    traits: [
      { text: "Talkative: nói nhiều", type: "I" },
      { text: "Controlled: có kiểm soát, tiết chế", type: "C" },
      { text: "Conventional: nói theo thói quen", type: "S" },
      { text: "Decisive: kiên quyết, quả quyết, dứt khoát", type: "D" }
    ]
  },
  {
    id: 5,
    traits: [
      { text: "Adventurous: liều lĩnh, thích phiêu lưu, mạo hiểm", type: "D" },
      { text: "Insightful: sâu sắc, sáng suốt", type: "C" },
      { text: "Out-going: dễ gần, thoải mái, chan hòa", type: "I" },
      { text: "Moderate: ôn hòa", type: "S" }
    ]
  },
  {
    id: 6,
    traits: [
      { text: "Gentle: hòa nhã, nhẹ nhàng, lịch sự", type: "S" },
      { text: "Persuasive: có tài thuyết phục", type: "I" },
      { text: "Humble: khiêm nhường", type: "C" },
      { text: "Original: độc đáo, lập dị", type: "D" }
    ]
  },
  {
    id: 7,
    traits: [
      { text: "Expressive: diễn cảm", type: "I" },
      { text: "Conscientious: tận tâm, chu đáo, tỉ mỉ", type: "C" },
      { text: "Dominant: lấn át, thống trị", type: "D" },
      { text: "Responsive: đáp ứng nhiệt tình, phản ứng nhanh", type: "S" }
    ]
  },
  {
    id: 8,
    traits: [
      { text: "Poised: đĩnh đạc, tự chủ, bình tĩnh", type: "C" },
      { text: "Observant: hay quan sát, tinh ý", type: "S" },
      { text: "Modest: khiêm tốn, nhún nhường", type: "S" },
      { text: "Impatient: không có kiên nhẫn", type: "D" }
    ]
  },
  {
    id: 9,
    traits: [
      { text: "Tactful: khéo ứng xử, lịch thiệp", type: "S" },
      { text: "Agreeable: sẵn sàng tán thành, đồng ý", type: "S" },
      { text: "Magnetic: có sức hấp dẫn, lôi cuốn", type: "I" },
      { text: "Insistent: cương quyết", type: "D" }
    ]
  },
  {
    id: 10,
    traits: [
      { text: "Brave: can đảm", type: "D" },
      { text: "Inspiring: gây cảm hứng", type: "I" },
      { text: "Submissive: dễ phục tùng", type: "S" },
      { text: "Timid: nhút nhát", type: "C" }
    ]
  },
  {
    id: 11,
    traits: [
      { text: "Reserved: kín đáo, dè dặt", type: "C" },
      { text: "Obliging: sẵn lòng giúp đỡ", type: "S" },
      { text: "Strong-willed: cứng cỏi, kiên quyết", type: "D" },
      { text: "Cheerful: vui vẻ, tươi cười", type: "I" }
    ]
  },
  {
    id: 12,
    traits: [
      { text: "Stimulating: kích thích, khuyến khích", type: "I" },
      { text: "Kind: tử tế", type: "S" },
      { text: "Perceptive: dễ cảm thụ", type: "C" },
      { text: "Independent: độc lập", type: "D" }
    ]
  },
  {
    id: 13,
    traits: [
      { text: "Competitive: cạnh tranh", type: "D" },
      { text: "Considerate: ân cần, chu đáo", type: "S" },
      { text: "Joyful: mang lại niềm vui", type: "I" },
      { text: "Private: ẩn dật, cách biệt", type: "C" }
    ]
  },
  {
    id: 14,
    traits: [
      { text: "Fussy: nhắng nhít, cầu kỳ, kiểu cách", type: "C" },
      { text: "Obedient: vâng lời, dễ bảo", type: "S" },
      { text: "Firm: kiên quyết", type: "D" },
      { text: "Playful: hay nghịch", type: "I" }
    ]
  },
  {
    id: 15,
    traits: [
      { text: "Attractive: cuốn hút", type: "I" },
      { text: "Introspective: nội tâm", type: "C" },
      { text: "Stubborn: cứng đầu", type: "D" },
      { text: "Predictable: dễ đoán", type: "S" }
    ]
  },
  {
    id: 16,
    traits: [
      { text: "Logical: suy nghĩ theo logic", type: "C" },
      { text: "Bold: táo bạo, dũng cảm", type: "D" },
      { text: "Loyal: trung thành", type: "S" },
      { text: "Charming: duyên dáng, quyến rũ", type: "I" }
    ]
  },
  {
    id: 17,
    traits: [
      { text: "Sociable: dễ gần, chan hòa", type: "I" },
      { text: "Patient: kiên nhẫn", type: "S" },
      { text: "Self-reliant: tự lực", type: "D" },
      { text: "Soft spoken: nói năng nhẹ nhàng", type: "C" }
    ]
  },
  {
    id: 18,
    traits: [
      { text: "Willing: có thiện ý, hay giúp đỡ", type: "S" },
      { text: "Eager: hăm hở, nhiệt tình", type: "I" },
      { text: "Thorough: cẩn thận, tỉ mỉ", type: "C" },
      { text: "High-spirited: cao thượng", type: "D" }
    ]
  },
  {
    id: 19,
    traits: [
      { text: "Aggressive: xông xáo, năng nổ", type: "D" },
      { text: "Extroverted: dễ gần, chan hòa", type: "I" },
      { text: "Amiable: dễ kết bạn", type: "S" },
      { text: "Fearful: e ngại", type: "C" }
    ]
  },
  {
    id: 20,
    traits: [
      { text: "Confident: tự tin", type: "D" },
      { text: "Sympathethic: dễ cảm thông", type: "S" },
      { text: "Impartial: công bằng, không thiên vị", type: "C" },
      { text: "Assertive: quả quyết, quyết đoán", type: "I" }
    ]
  },
  {
    id: 21,
    traits: [
      { text: "Well-disciplined: có kỉ luật tốt", type: "C" },
      { text: "Generous: rộng lượng, hào phóng", type: "S" },
      { text: "Animated: sôi nổi, đầy sinh khí", type: "I" },
      { text: "Persistent: bền bỉ", type: "D" }
    ]
  },
  {
    id: 22,
    traits: [
      { text: "Impulsive: bốc đồng", type: "I" },
      { text: "Introverted: hướng nội", type: "C" },
      { text: "Forceful: mạnh mẽ, sinh động, đầy sức thuyết phục", type: "D" },
      { text: "Easy-going: dễ dãi", type: "S" }
    ]
  },
  {
    id: 23,
    traits: [
      { text: "Good mixer: giao thiệp tốt", type: "I" },
      { text: "Refined: lịch sự, tao nhã", type: "C" },
      { text: "Vigorous: mãnh liệt", type: "D" },
      { text: "Lenient: hiền hậu, khoan dung", type: "S" }
    ]
  },
  {
    id: 24,
    traits: [
      { text: "Captivating: hấp dẫn, quyến rũ", type: "I" },
      { text: "Contented: dễ chấp nhận, dễ hài lòng, thỏa mãn", type: "S" },
      { text: "Demanding: đòi hỏi khắt khe", type: "D" },
      { text: "Compiant: hay phục tùng", type: "C" }
    ]
  },
  {
    id: 25,
    traits: [
      { text: "Argumentative: hay tranh cãi", type: "D" },
      { text: "Systematic: làm việc có phương pháp, có hệ thống", type: "C" },
      { text: "Cooperative: thiên về hướng hợp tác", type: "S" },
      { text: "Light-hearted: vô tư lự, thư thái", type: "I" }
    ]
  },
  {
    id: 26,
    traits: [
      { text: "Jovial: vui vẻ, vui tính", type: "I" },
      { text: "Precise: đòi hỏi chính xác", type: "C" },
      { text: "Direct: thẳng thắn, đích thân làm", type: "D" },
      { text: "Even-tempered: điền đạm, bình thản", type: "S" }
    ]
  },
  {
    id: 27,
    traits: [
      { text: "Restless: luôn không yên, hiếu động", type: "D" },
      { text: "Neighborly: thuận hòa với bạn bè, mọi người", type: "S" },
      { text: "Appealing: lôi cuốn, quyến rũ", type: "I" },
      { text: "Careful: quan tâm, lo lắng đến người khác", type: "C" }
    ]
  },
  {
    id: 28,
    traits: [
      { text: "Respectful: luôn tôn trọng người khác", type: "C" },
      { text: "Pioneering: đảm nhiệm vai trò tiên phong", type: "D" },
      { text: "Optimistic: luôn lạc quan", type: "I" },
      { text: "Helpful: hay giúp đỡ", type: "S" }
    ]
  }
];

const DISCTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; mostLike: { text: string; type: 'D' | 'I' | 'S' | 'C' } | null; leastLike: { text: string; type: 'D' | 'I' | 'S' | 'C' } | null }[]>([]);
  const [mostLike, setMostLike] = useState('');
  const [leastLike, setLeastLike] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const calculateResults = () => {
    const scoreTemplate = { D: 0, I: 0, S: 0, C: 0 };
    const mostScores = { ...scoreTemplate };
    const leastScores = { ...scoreTemplate };
    
    answers.forEach(answer => {
      if (answer.mostLike) {
        mostScores[answer.mostLike.type]++;
      }
      if (answer.leastLike) {
        if (answer.leastLike) {
          leastScores[answer.leastLike.type]++;
        }
      }
    });
    
    // Calculate final scores (Most - Least)
    const finalScores: { D: number; I: number; S: number; C: number } = { D: 0, I: 0, S: 0, C: 0 };
    Object.keys(scoreTemplate).forEach(key => {
      finalScores[key as 'D' | 'I' | 'S' | 'C'] = mostScores[key as 'D' | 'I' | 'S' | 'C'] - leastScores[key as 'D' | 'I' | 'S' | 'C'];
    });
    
    return finalScores;
  };
  
  const handleNext = () => {
    if (mostLike && leastLike) {
      const mostLikeTrait = questions[currentQuestion].traits.find(t => t.text === mostLike) as { text: string; type: 'D' | 'I' | 'S' | 'C' } | null;
      const leastLikeTrait = questions[currentQuestion].traits.find(t => t.text === leastLike) as { text: string; type: 'D' | 'I' | 'S' | 'C' } | null;
      
      const answer = {
        questionId: questions[currentQuestion].id,
        mostLike: mostLikeTrait,
        leastLike: leastLikeTrait
      };
      
      setAnswers([...answers, answer]);
      setMostLike('');
      setLeastLike('');
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }
  };
  
  const getPersonalityAnalysis = (scores: { [key: string]: number }) => {
    const analysis: {
      dominant: string[],
      secondary: string[],
      challenges: string[],
      suitableRoles: string[]
    } = {
      dominant: [],
      secondary: [],
      challenges: [],
      suitableRoles: []
    };

    // Analyze primary trait (highest score)
    const traits = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const highestTrait = traits[0][0];
    const lowestTrait = traits[3][0];

    // Analysis for each primary trait
    switch(highestTrait) {
      case 'D':
        analysis.dominant = [
          "Bạn là người có tính quyết đoán cao",
          "Thích đương đầu với thách thức",
          "Tự tin và độc lập trong công việc",
          "Có khả năng ra quyết định nhanh"
        ];
        analysis.suitableRoles = [
          "Lãnh đạo",
          "Quản lý dự án",
          "Khởi nghiệp",
          "Kinh doanh"
        ];
        break;
      case 'I':
        analysis.dominant = [
          "Bạn là người có khả năng giao tiếp tốt",
          "Nhiệt tình và lạc quan",
          "Thích làm việc với người khác",
          "Có khả năng thuyết phục cao"
        ];
        analysis.suitableRoles = [
          "Bán hàng",
          "Marketing",
          "Quan hệ công chúng",
          "Đào tạo"
        ];
        break;
      case 'S':
        analysis.dominant = [
          "Bạn là người đáng tin cậy và kiên nhẫn",
          "Thích môi trường ổn định",
          "Giỏi lắng nghe và hỗ trợ người khác",
          "Làm việc có tổ chức và kiên trì"
        ];
        analysis.suitableRoles = [
          "Chăm sóc khách hàng",
          "Nhân sự",
          "Hỗ trợ kỹ thuật",
          "Quản lý vận hành"
        ];
        break;
      case 'C':
        analysis.dominant = [
          "Bạn là người cẩn thận và chi tiết",
          "Thích công việc có tính phân tích",
          "Đánh giá cao sự chính xác",
          "Làm việc có hệ thống và logic"
        ];
        analysis.suitableRoles = [
          "Phân tích dữ liệu",
          "Kế toán",
          "Lập trình",
          "Nghiên cứu"
        ];
        break;
    }

    // Add challenges based on lowest trait
    switch(lowestTrait) {
      case 'D':
        analysis.challenges = [
          "Cần cải thiện khả năng ra quyết định",
          "Tăng cường sự tự tin",
          "Phát triển tính độc lập"
        ];
        break;
      case 'I':
        analysis.challenges = [
          "Cần cải thiện kỹ năng giao tiếp",
          "Tăng cường networking",
          "Phát triển khả năng thuyết phục"
        ];
        break;
      case 'S':
        analysis.challenges = [
          "Cần linh hoạt hơn với thay đổi",
          "Tăng tốc độ làm việc",
          "Phát triển khả năng thích nghi"
        ];
        break;
      case 'C':
        analysis.challenges = [
          "Cần bớt cầu toàn",
          "Tăng tốc độ ra quyết định",
          "Phát triển tư duy tổng quan"
        ];
        break;
    }

    return analysis;
  };

  if (showResults) {
    const results = calculateResults();
    const analysis = getPersonalityAnalysis(results);
    
    // Calculate total and percentages
    const total = Math.abs(results.D) + Math.abs(results.I) + Math.abs(results.S) + Math.abs(results.C);
    const getPercentage = (value: number) => Math.round(Math.abs(value) / total * 100);
    
    const percentages = {
      D: getPercentage(results.D),
      I: getPercentage(results.I),
      S: getPercentage(results.S),
      C: getPercentage(results.C)
    };

    // Calculate SVG paths for pie chart
    const getSlicePath = (startAngle: number, endAngle: number) => {
      const start = polarToCartesian(200, 200, 150, endAngle);
      const end = polarToCartesian(200, 200, 150, startAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
      return [
        'M', 200, 200,
        'L', start.x, start.y,
        'A', 150, 150, 0, largeArcFlag, 0, end.x, end.y,
        'Z'
      ].join(' ');
    };

    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
      };
    };

    // Calculate angles for each slice
    let currentAngle = 0;
    const slices = [
      { type: 'D', color: '#ff6b6b', name: 'Red' },  // Red for D
      { type: 'I', color: '#ffd43b', name: 'Yellow' }, // Yellow for I 
      { type: 'S', color: '#69db7c', name: 'Green' }, // Green for S
      { type: 'C', color: '#4dabf7', name: 'Blue' }  // Blue for C
    ].map(slice => {
      const angle = (percentages[slice.type as 'D' | 'I' | 'S' | 'C'] / 100) * 360;
      const pathData = getSlicePath(currentAngle, currentAngle + angle);
      const labelPos = polarToCartesian(200, 200, 100, currentAngle + (angle / 2));
      currentAngle += angle;
      return { ...slice, pathData, labelPos, percentage: percentages[slice.type as 'D' | 'I' | 'S' | 'C'] };
    });
    
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Kết quả trắc nghiệm DISC của bạn</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {/* Pie Chart */}
            <div className="flex justify-center mb-8">
              <svg width="400" height="400" viewBox="0 0 400 400">
                {/* Pie Slices */}
                {slices.map((slice, i) => (
                  <g key={slice.type}>
                    <path
                      d={slice.pathData}
                      fill={slice.color}
                      stroke="white"
                      strokeWidth="2"
                    />
                    {/* Labels */}
                    <text
                      x={slice.labelPos.x}
                      y={slice.labelPos.y}
                      textAnchor="middle"
                      dy=".35em"
                      className="text-sm font-medium"
                      fill="black"
                    >
                      {slice.name}
                    </text>
                    <text
                      x={slice.labelPos.x}
                      y={slice.labelPos.y + 20}
                      textAnchor="middle"
                      dy=".35em"
                      className="text-sm"
                      fill="black"
                    >
                      {slice.percentage}%
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Analysis */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Đặc điểm nổi bật</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {analysis.dominant.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Điểm cần phát triển</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {analysis.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Nghề nghiệp phù hợp</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {analysis.suitableRoles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Trắc nghiệm tính cách DISC - Câu {currentQuestion + 1}/{questions.length}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-4">Chọn đặc điểm giống bạn NHẤT:</h3>
            <RadioGroup value={mostLike} onValueChange={setMostLike} className="space-y-2">
              {questions[currentQuestion].traits.map((trait, index) => (
                <div key={`most-${index}`} className="flex items-center space-x-2">
                  <RadioGroupItem value={trait.text} id={`most-${index}`} 
                    disabled={trait.text === leastLike} />
                  <Label htmlFor={`most-${index}`}>{trait.text}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Chọn đặc điểm giống bạn ÍT NHẤT:</h3>
            <RadioGroup value={leastLike} onValueChange={setLeastLike} className="space-y-2">
              {questions[currentQuestion].traits.map((trait, index) => (
                <div key={`least-${index}`} className="flex items-center space-x-2">
                  <RadioGroupItem value={trait.text} id={`least-${index}`}
                    disabled={trait.text === mostLike} />
                  <Label htmlFor={`least-${index}`}>{trait.text}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <Button 
            onClick={handleNext}
            disabled={!mostLike || !leastLike}
            className="w-full"
          >
            {currentQuestion < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DISCTest;
