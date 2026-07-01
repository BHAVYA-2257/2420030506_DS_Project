import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Activity, Zap, Shield, Flame, Target, Sparkles, 
  Clock, Compass, Crosshair, Award, Heart, CheckCircle, AlertCircle, Apple, Droplet 
} from 'lucide-react';
import NutritionSection from './NutritionSection';

const SPORT_PALETTES = {
  Football: { primary: '#2E7D32', secondary: '#66BB6A' },
  Cricket: { primary: '#1565C0', secondary: '#42A5F5' },
  Basketball: { primary: '#EF6C00', secondary: '#FFA000' },
  Tennis: { primary: '#9C27B0', secondary: '#E040FB' },
  Badminton: { primary: '#00ACC1', secondary: '#26C6DA' },
  Volleyball: { primary: '#0288D1', secondary: '#4FC3F7' },
  Swimming: { primary: '#0277BD', secondary: '#26C6DA' },
  Running: { primary: '#D32F2F', secondary: '#F57C00' },
  Cycling: { primary: '#00C853', secondary: '#B9F6CA' },
  Boxing: { primary: '#C62828', secondary: '#FFC107' },
  Kabaddi: { primary: '#F4511E', secondary: '#D32F2F' },
  'Table Tennis': { primary: '#C2185B', secondary: '#E53935' },
  Hockey: { primary: '#E65100', secondary: '#FFB74D' },
  Gym: { primary: '#37474F', secondary: '#90A4AE' }
};

const getSportImage = (sport) => {
  switch (sport) {
    case 'Football': return '/assets/Ultra-realistic,_commercial_sports_photography,_premium_202606301802.jpeg';
    case 'Cricket': return '/assets/Ultra-realistic,_commercial_sports_photography,_premium_202606301805.jpeg';
    case 'Basketball': return '/assets/Professional_basketball_player_performing_a_202606301821.jpeg';
    case 'Running': return '/assets/Professional_long-distance_runner_sprinting_through_202606301901.jpeg';
    case 'Swimming': return '/assets/SWIMMING.png';
    case 'Boxing': return '/assets/Professional_boxer_throwing_a_powerful_202606301839.jpeg';
    case 'Kabaddi': return '/assets/Professional_kabaddi_player_lunging_forward_202606301841.jpeg';
    case 'Badminton': return '/assets/BADMINTON.png';
    case 'Table Tennis': return '/assets/Professional_table_tennis_player_executing_202606301849.jpeg';
    case 'Volleyball': return '/assets/VOLLEYBALL.png';
    case 'Tennis': return '/assets/tennis.png';
    case 'Cycling': return '/assets/cycling.png';
    case 'Hockey': return '/assets/hockey.png';
    case 'Gym': return '/assets/gym.png';
    default: return '/assets/A_diverse_group_of_elite_202606301909.jpeg';
  }
};

const getMetricIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes('speed') || t.includes('strike rate')) return <Zap size={16} color="currentColor" />;
  if (t.includes('stamina') || t.includes('endurance') || t.includes('cadence')) return <Activity size={16} color="currentColor" />;
  if (t.includes('accuracy') || t.includes('control') || t.includes('fielding')) return <Target size={16} color="currentColor" />;
  if (t.includes('power') || t.includes('strength') || t.includes('smash speed')) return <Flame size={16} color="currentColor" />;
  if (t.includes('goal') || t.includes('assist') || t.includes('success') || t.includes('average')) return <Award size={16} color="currentColor" />;
  if (t.includes('heart rate')) return <Heart size={16} color="currentColor" />;
  if (t.includes('time') || t.includes('recovery')) return <Clock size={16} color="currentColor" />;
  return <Compass size={16} color="currentColor" />;
};

const SPORTS_PERFORMANCE_DATABASE = {
  Football: {
    overallScore: 94,
    weeklyProgress: [88, 90, 89, 91, 92, 93, 94],
    metrics: [
      { title: 'Speed', value: '34.2 km/h', percent: 92 },
      { title: 'Stamina', value: '90%', percent: 90 },
      { title: 'Passing Accuracy', value: '88.5%', percent: 88 },
      { title: 'Shooting Accuracy', value: '84%', percent: 84 },
      { title: 'Ball Control', value: '89%', percent: 89 },
      { title: 'Goals', value: '14 (Target Met)', percent: 100 },
      { title: 'Assists', value: '8 (Optimal)', percent: 80 }
    ],
    strengths: ['High top-end sprint speed', 'Clinical execution in final third', 'Aerobic tactical endurance'],
    improvements: ['Crossing delivery placement', 'Aerial heading duel success'],
    aiTips: [
      'Integrate hamstring eccentric contractions (Nordic curls) to reduce pull risks during sprint transitions.',
      'Hone directional footwork placement off early crosses from wide lanes.'
    ],
    trainingSuggestions: [
      'High-speed sprint sets: 6x40m drills.',
      'Technical ball handling: 15 mins close-telemetry dribbling.'
    ],
    nutrition: {
      demand: 'High Carbohydrates & Lean Protein',
      split: { carbs: '55%', protein: '25%', fats: '20%' },
      calories: '3,200 kcal',
      hydration: '3.5L Electrolyte Water',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Oatmeal & Banana Mash', items: 'Oatmeal, sliced bananas, honey, chia seeds' },
        { type: 'Post-Workout Recovery', title: 'Grilled Chicken & Rice', items: 'Lean chicken breast, brown rice, steamed broccoli' },
        { type: 'Power Breakfast', title: 'Spinach & Egg White Scramble', items: 'Egg whites, fresh spinach, whole wheat toast, avocado' },
        { type: 'Tactical Dinner', title: 'Baked Salmon & Quinoa', items: 'Salmon fillet, quinoa, asparagus, olive oil' }
      ]
    }
  },
  Cricket: {
    overallScore: 86,
    weeklyProgress: [82, 83, 85, 84, 86, 85, 86],
    metrics: [
      { title: 'Batting Average', value: '48.5', percent: 90 },
      { title: 'Strike Rate', value: '138.2', percent: 85 },
      { title: 'Bowling Speed', value: '135 km/h', percent: 78 },
      { title: 'Bowling Accuracy', value: '82%', percent: 82 },
      { title: 'Catch Success', value: '91%', percent: 91 },
      { title: 'Fielding', value: '86%', percent: 86 }
    ],
    strengths: ['Cover drive footwork sync', 'Catching reaction latency', 'Direct hit throw accuracy'],
    improvements: ['Yorker length consistency', 'Running between wickets turn-speed'],
    aiTips: [
      'Train target bowling at single stumps using visual markers.',
      'Utilize wrist snaps for late-cut directional batting adjustments.'
    ],
    trainingSuggestions: [
      'Target bowling drill: 6 overs targeting line-marker cones.',
      'Catching drills: 20 repetitions high-catch reflex practice.'
    ],
    nutrition: {
      demand: 'Complex Carbohydrates & Glycogen Loading',
      split: { carbs: '50%', protein: '25%', fats: '25%' },
      calories: '2,900 kcal',
      hydration: '4.0L Mineral Hydration Mix',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Oatmeal with Honey & Fruits', items: 'Whole oats, sliced banana, dark honey, chia seeds' },
        { type: 'Post-Workout Recovery', title: 'Chicken Rice Stew', items: 'Lean chicken stew, brown rice, boiled vegetables' },
        { type: 'Power Breakfast', title: 'Avocado Poached Eggs', items: 'Poached eggs, mashed avocado, sourdough toast' },
        { type: 'Tactical Dinner', title: 'Fish Quinoa Salad', items: 'Grilled fish, quinoa, cucumber, cherry tomatoes, olive oil' }
      ]
    }
  },
  Basketball: {
    overallScore: 92,
    weeklyProgress: [87, 88, 90, 89, 91, 90, 92],
    metrics: [
      { title: 'Shooting Accuracy', value: '54%', percent: 85 },
      { title: 'Passing', value: '88%', percent: 88 },
      { title: 'Rebounds', value: '8.4 pg', percent: 80 },
      { title: 'Assists', value: '6.2 pg', percent: 75 },
      { title: 'Jump Height', value: '84 cm', percent: 92 },
      { title: 'Speed', value: '28 km/h', percent: 88 }
    ],
    strengths: ['Vertical jump takeoff reach', 'Court vision transition flow', 'Fast-break speed transition'],
    improvements: ['Free throw conversion rate', 'Off-ball perimeter screening'],
    aiTips: [
      'Practice high-arc wrist releases to improve deep-shot angles.',
      'Work on ankle stability drills to reinforce pivot turns and cuts.'
    ],
    trainingSuggestions: [
      'Jump height work: 3x8 repetitions depth jumps.',
      'Shooting workout: 100 spot-up jumpers from different court zones.'
    ],
    nutrition: {
      demand: 'Moderate Carbohydrates & Joint Support Fats',
      split: { carbs: '50%', protein: '25%', fats: '25%' },
      calories: '3,400 kcal',
      hydration: '3.8L Sodium-Potassium Mix',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Almond Butter Rice Cakes', items: 'Brown rice cakes, almond butter, sliced strawberries' },
        { type: 'Post-Workout Recovery', title: 'Whey Isolate Shake', items: 'Whey isolate, coconut water, frozen banana, berries' },
        { type: 'Power Breakfast', title: 'Eggs & Avocado sourdough', items: 'Two poached eggs, mashed avocado, sourdough toast' },
        { type: 'Tactical Dinner', title: 'Beef Tenderloin & Potato', items: 'Lean beef cut, sweet potato mash, asparagus' }
      ]
    }
  },
  Tennis: {
    overallScore: 87,
    weeklyProgress: [83, 84, 85, 87, 86, 88, 87],
    metrics: [
      { title: 'Serve Speed', value: '192 km/h', percent: 90 },
      { title: 'Serve Accuracy', value: '68%', percent: 82 },
      { title: 'Forehand', value: '86%', percent: 86 },
      { title: 'Backhand', value: '80%', percent: 80 },
      { title: 'Footwork', value: '88%', percent: 88 },
      { title: 'Endurance', value: '85%', percent: 85 }
    ],
    strengths: ['Serve velocity output', 'Forehand baseline depth', 'Lateral baseline movement speed'],
    improvements: ['Second serve consistency', 'Net play reaction speed'],
    aiTips: [
      'Maintain shoulder rotation sync to hit cleaner serves.',
      'Perform lateral side-shuttle drills to quicken court coverage.'
    ],
    trainingSuggestions: [
      'Serve repetition drill: 50 first serves.',
      'Agility training: 10 sets of lateral baseline side-shuttles.'
    ],
    nutrition: {
      demand: 'High Electrolytes & Sustained Glycogen',
      split: { carbs: '55%', protein: '20%', fats: '25%' },
      calories: '3,000 kcal',
      hydration: '4.2L Hypotonic Salt Drink',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Oatmeal & Medjool Dates', items: 'Oatmeal, chopped dates, honey, chia seeds' },
        { type: 'Post-Workout Recovery', title: 'Salmon & Sweet Potato', items: 'Pan-seared salmon, baked sweet potato, asparagus' },
        { type: 'Power Breakfast', title: 'Oat Bran & Flaxseeds Bowl', items: 'Oat bran, flaxseeds, almond milk, sliced banana' },
        { type: 'Tactical Dinner', title: 'Turkey Breast Rice Bowl', items: 'Sliced turkey, brown rice, broccoli, olive oil' }
      ]
    }
  },
  Badminton: {
    overallScore: 84,
    weeklyProgress: [79, 81, 80, 83, 82, 85, 84],
    metrics: [
      { title: 'Smash Speed', value: '312 km/h', percent: 94 },
      { title: 'Smash Accuracy', value: '78%', percent: 85 },
      { title: 'Agility', value: '92%', percent: 92 },
      { title: 'Footwork', value: '88%', percent: 88 },
      { title: 'Reaction Time', value: '165 ms', percent: 90 }
    ],
    strengths: ['Smash velocity release', 'Net drop control grip', 'Mid-court defense response'],
    improvements: ['Deep corner backhand clearances', 'Court recovery step speed'],
    aiTips: [
      'Use quick wrist-snap techniques to add down-angle smash power.',
      'Perform agility ladder drills to speed up split-step reaction.'
    ],
    trainingSuggestions: [
      'Smash practice: 40 smash-and-recovery sets.',
      'Footwork drills: 10 mins shadow court movements.'
    ],
    nutrition: {
      demand: 'Complex Carbohydrates & Rapid Recovery Sugars',
      split: { carbs: '55%', protein: '25%', fats: '20%' },
      calories: '2,700 kcal',
      hydration: '3.2L Isotonic Amino Drink',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Banana Rice Pudding', items: 'Rice pudding, sliced banana, cinnamon, honey' },
        { type: 'Post-Workout Recovery', title: 'Egg Salad Wrap', items: 'Hard boiled eggs, light mayo, whole wheat wrap, greens' },
        { type: 'Power Breakfast', title: 'Greek Yogurt & Berries Bowl', items: 'Greek yogurt, mixed berries, walnuts, protein powder' },
        { type: 'Tactical Dinner', title: 'Seared Fish & Broccoli', items: 'Haddock fillet, steamed broccoli, brown rice, olive oil' }
      ]
    }
  },
  Volleyball: {
    overallScore: 88,
    weeklyProgress: [84, 85, 87, 86, 88, 87, 88],
    metrics: [
      { title: 'Spike Power', value: '820 N', percent: 90 },
      { title: 'Serve Accuracy', value: '84%', percent: 84 },
      { title: 'Jump Height', value: '78 cm', percent: 86 },
      { title: 'Blocking', value: '82%', percent: 82 },
      { title: 'Stamina', value: '85%', percent: 85 }
    ],
    strengths: ['Spike down-angle release', 'Front row blocks coverage', 'Defensive reaction dig rate'],
    improvements: ['Float serve rotation control', 'Backcourt diving digs recovery'],
    aiTips: [
      'Exaggerate arm swing back extension to improve jump height.',
      'Coordinate block jumps with setter hand movement cues.'
    ],
    trainingSuggestions: [
      'Jump blocking drill: 4 sets of 10 box jump-touches.',
      'Serve targets: 30 floats targeting corner squares.'
    ],
    nutrition: {
      demand: 'High Protein & Lean Caloric Fuel',
      split: { carbs: '50%', protein: '30%', fats: '20%' },
      calories: '3,100 kcal',
      hydration: '3.6L Electrolyte Mix',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Toast & Honey Jam', items: 'Whole wheat toast, strawberry honey jam, peanut butter' },
        { type: 'Post-Workout Recovery', title: 'Turkey Stew Bowl', items: 'Lean turkey breast stew, quinoa, broccoli' },
        { type: 'Power Breakfast', title: 'Scrambled Tofu & Toast', items: 'Tofu scramble, spinach, cherry tomatoes, whole wheat toast' },
        { type: 'Tactical Dinner', title: 'Haddock & Roasted Asparagus', items: 'Haddock fillet, roasted asparagus, sweet potato wedges' }
      ]
    }
  },
  Swimming: {
    overallScore: 85,
    weeklyProgress: [80, 82, 81, 83, 84, 86, 85],
    metrics: [
      { title: 'Lap Time', value: '54.2s', percent: 92 },
      { title: 'Stroke Efficiency', value: '88%', percent: 88 },
      { title: 'Speed', value: '2.1 m/s', percent: 86 },
      { title: 'Endurance', value: '89%', percent: 89 },
      { title: 'Heart Rate', value: '154 BPM', percent: 80 }
    ],
    strengths: ['Hydrodynamic stroke glide', 'Flutter kick frequency', 'Sustained aerobic conditioning'],
    improvements: ['Flip-turn wall push off power', 'Breath cadence consistency'],
    aiTips: [
      'Maintain high elbow posture during catch to pull more water.',
      'Integrate explosive core leg push-offs during flip turns.'
    ],
    trainingSuggestions: [
      'Wall turn drill: 10 flip-turn repetitions.',
      'Stroke pace sets: 8x50m at target efficiency.'
    ],
    nutrition: {
      demand: 'High Protein & Joint Anti-Inflammatory Fats',
      split: { carbs: '50%', protein: '30%', fats: '20%' },
      calories: '3,800 kcal',
      hydration: '4.0L Sodium Recovery Mix',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Baked Sweet Potato', items: 'Baked sweet potato mash, whole milk, almond butter' },
        { type: 'Post-Workout Recovery', title: 'Salmon & Greens', items: 'Atlantic salmon, baby spinach, brown rice' },
        { type: 'Power Breakfast', title: 'Greek Yogurt Berry Bowl', items: 'Greek yogurt, mixed berries, walnuts, protein isolate' },
        { type: 'Tactical Dinner', title: 'Turkey Pasta Bowls', items: 'Lean turkey breast, whole wheat pasta, tomato pesto' }
      ]
    }
  },
  Running: {
    overallScore: 88,
    weeklyProgress: [82, 84, 85, 86, 88, 87, 88],
    metrics: [
      { title: 'Sprint Time', value: '11.2s', percent: 94 },
      { title: 'Speed', value: '18.5 km/h', percent: 88 },
      { title: 'Distance', value: '10.2 km', percent: 85 },
      { title: 'Cadence', value: '176 steps/min', percent: 90 },
      { title: 'Endurance', value: '92%', percent: 92 }
    ],
    strengths: ['Aerobic threshold capacity', 'Stride cadence maintenance', 'Stable foot strike alignment'],
    improvements: ['Sprinting leg recovery height', 'Uphill grade pace control'],
    aiTips: [
      'Maintain upright spinal posture during high stride rates.',
      'Introduce sprint intervals to raise VO2 Max performance.'
    ],
    trainingSuggestions: [
      'Cadence drills: 4x800m stride focus.',
      'Tempo Run: 25 mins at lactate threshold.'
    ],
    nutrition: {
      demand: 'High Glycogen Loads & Electrolytes',
      split: { carbs: '60%', protein: '20%', fats: '20%' },
      calories: '3,000 kcal',
      hydration: '3.5L Mineral Fluid',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Porridge & Berries', items: 'Oatmeal porridge, blueberries, honey, chia seeds' },
        { type: 'Post-Workout Recovery', title: 'Lean Beef Quinoa Bowl', items: 'Beef strips, quinoa, bell peppers, broccoli' },
        { type: 'Power Breakfast', title: 'Peanut Butter Banana Toast', items: 'Medjool dates, banana, peanut butter, whole wheat bread' },
        { type: 'Tactical Dinner', title: 'Grilled Salmon & Sweet Potatoes', items: 'Salmon fillet, sweet potatoes, salad, olive oil' }
      ]
    }
  },
  Cycling: {
    overallScore: 89,
    weeklyProgress: [84, 85, 86, 88, 87, 89, 89],
    metrics: [
      { title: 'Speed', value: '38.4 km/h', percent: 90 },
      { title: 'Distance', value: '42.5 km', percent: 88 },
      { title: 'Cadence', value: '94 rpm', percent: 86 },
      { title: 'Power', value: '280 W', percent: 84 },
      { title: 'Heart Rate', value: '142 BPM', percent: 80 }
    ],
    strengths: ['Cadence rhythm control', 'Sustained aerobic power output', 'Aero posture stability'],
    improvements: ['Out-of-saddle sprint acceleration', 'Climbing pacing efficiency'],
    aiTips: [
      'Focus on pulling up on pedals to engage hamstrings.',
      'Train core endurance to stabilize hip movements.'
    ],
    trainingSuggestions: [
      'Intervals: 5x3 mins at anaerobic capacity.',
      'Spin drill: 15 mins single-leg cadence drills.'
    ],
    nutrition: {
      demand: 'High Glycogen Storage & Amino Acids',
      split: { carbs: '60%', protein: '20%', fats: '20%' },
      calories: '3,500 kcal',
      hydration: '4.5L Electrolyte Drinks',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Pasta & Olive Oil', items: 'Whole wheat pasta, virgin olive oil, cherry tomatoes' },
        { type: 'Post-Workout Recovery', title: 'Tuna Sweet Potato Salad', items: 'Canned tuna, baked sweet potato, mixed greens' },
        { type: 'Power Breakfast', title: 'Oatmeal & Raisins', items: 'Oats, milk, raisins, almonds, scoop of whey protein' },
        { type: 'Tactical Dinner', title: 'Steamed Salmon & Quinoa', items: 'Salmon, quinoa, green beans, lemon glaze' }
      ]
    }
  },
  Boxing: {
    overallScore: 89,
    weeklyProgress: [83, 85, 86, 88, 87, 89, 89],
    metrics: [
      { title: 'Punch Speed', value: '8.4 punches/s', percent: 92 },
      { title: 'Punch Power', value: '1200 N', percent: 90 },
      { title: 'Accuracy', value: '74%', percent: 86 },
      { title: 'Footwork', value: '85%', percent: 85 },
      { title: 'Stamina', value: '88%', percent: 88 }
    ],
    strengths: ['Fast combination strikes', 'Slip-and-counter reaction times', 'High anaerobic endurance'],
    improvements: ['Defensive guard return speed', 'Power transfer through pivots'],
    aiTips: [
      'Rotate hips fully during strikes to transfer more power.',
      'Introduce shadow boxing with light wrist weights.'
    ],
    trainingSuggestions: [
      'Heavy bag drill: 6 rounds of 3 mins combination focus.',
      'Reflex work: 15 mins double-end bag drills.'
    ],
    nutrition: {
      demand: 'Lean Protein & Muscle Build Aminos',
      split: { carbs: '45%', protein: '35%', fats: '20%' },
      calories: '2,800 kcal',
      hydration: '3.0L Sparring Fluid',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Peanut Toast & Egg Whites', items: 'Whole wheat toast, peanut butter, hard-boiled egg whites' },
        { type: 'Post-Workout Recovery', title: 'Turkey Avocado Wraps', items: 'Sliced turkey, avocado, whole wheat wraps, peppers' },
        { type: 'Power Breakfast', title: 'Oat Bran Shake', items: 'Oat bran, pumpkin seeds, flaxseeds, almond milk' },
        { type: 'Tactical Dinner', title: 'Sirloin Steak & Veggies', items: 'Lean sirloin beef, sweet potato wedges, broccoli' }
      ]
    }
  },
  Kabaddi: {
    overallScore: 88,
    weeklyProgress: [83, 84, 85, 87, 86, 88, 88],
    metrics: [
      { title: 'Raid Success', value: '68%', percent: 88 },
      { title: 'Tackle Success', value: '58%', percent: 85 },
      { title: 'Agility', value: '92%', percent: 92 },
      { title: 'Speed', value: '24 km/h', percent: 84 },
      { title: 'Stamina', value: '89%', percent: 89 }
    ],
    strengths: ['Sudden lateral escapes', 'Low ankle hold grabs', 'Explosive jump raids'],
    improvements: ['Dashing tackle block setups', 'Breath hold duration'],
    aiTips: [
      'Exaggerate hand touch motions to create escape angles.',
      'Train squat thrusts to quicken escape push-offs.'
    ],
    trainingSuggestions: [
      'Agility drills: 10 sets of lateral shuttle jumps.',
      'Escape drill: 15 mins technical raid turnouts.'
    ],
    nutrition: {
      demand: 'High Strength & Core Recovery Fuel',
      split: { carbs: '50%', protein: '30%', fats: '20%' },
      calories: '3,000 kcal',
      hydration: '3.8L Recovery Electrolytes',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Bananas & Honey Bread', items: 'Banana slices, dark honey, whole wheat bread' },
        { type: 'Post-Workout Recovery', title: 'Chicken & Lentil Broth', items: 'Chicken stew, yellow lentils, carrots, brown rice' },
        { type: 'Power Breakfast', title: 'Egg Scramble & Avocados', items: 'Whole eggs scramble, spinach, fresh avocado slices' },
        { type: 'Tactical Dinner', title: 'Mackerel Fish & Sweet Potato', items: 'Mackerel fillet, sweet potato mash, greens' }
      ]
    }
  },
  'Table Tennis': {
    overallScore: 84,
    weeklyProgress: [79, 80, 81, 83, 82, 84, 84],
    metrics: [
      { title: 'Serve Accuracy', value: '89%', percent: 89 },
      { title: 'Shot Speed', value: '64 km/h', percent: 82 },
      { title: 'Spin Control', value: '86%', percent: 86 },
      { title: 'Reaction Time', value: '138 ms', percent: 94 },
      { title: 'Footwork', value: '84%', percent: 84 }
    ],
    strengths: ['Quick wrist flicks spin forehand', 'Close-to-table reaction speed', 'Excellent spin read reflexes'],
    improvements: ['Deep backhand defensive blocks', 'Footwork slide speed transitions'],
    aiTips: [
      'Vary ball brush strokes during serve to hide spin.',
      'Keep knees bent lower to stabilize quick lateral slides.'
    ],
    trainingSuggestions: [
      'Multi-ball drills: 15 mins fast-paced push drills.',
      'Footwork practice: 10 sets of side-to-side transitions.'
    ],
    nutrition: {
      demand: 'High Reflex & Sustained Focus Nutrition',
      split: { carbs: '50%', protein: '25%', fats: '25%' },
      calories: '2,400 kcal',
      hydration: '3.0L Mineral Mix',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Toast & Chia Spread', items: 'Toast, chia seed jam, light almond butter' },
        { type: 'Post-Workout Recovery', title: 'Fish Salad Wrap', items: 'Tuna flakes, salad, olive oil, tortilla wraps' },
        { type: 'Power Breakfast', title: 'Yogurt Protein Shake', items: 'Greek yogurt, protein isolate, frozen berries' },
        { type: 'Tactical Dinner', title: 'Lean Turkey Quinoa', items: 'Turkey strips, quinoa, asparagus, olive oil' }
      ]
    }
  },
  Hockey: {
    overallScore: 86,
    weeklyProgress: [80, 82, 81, 84, 85, 86, 86],
    metrics: [
      { title: 'Passing Accuracy', value: '86%', percent: 86 },
      { title: 'Shooting Accuracy', value: '80%', percent: 80 },
      { title: 'Stick Control', value: '88%', percent: 88 },
      { title: 'Speed', value: '31 km/h', percent: 85 },
      { title: 'Stamina', value: '89%', percent: 89 }
    ],
    strengths: ['Low dribble stick control speed', 'Quick wrist flick passes', 'Sustained wing sprint endurance'],
    improvements: ['Reverse stick shooting alignment', 'Out-of-possession trackbacks'],
    aiTips: [
      'Practice low-body stick drags to speed up ball sweeps.',
      'Run shuttle lines to improve stop-and-start sprint rates.'
    ],
    trainingSuggestions: [
      'Dribble target drill: 15 mins stick handle sweeps.',
      'Shuttle sprints: 6 sets of 20m shuttle line accelerations.'
    ],
    nutrition: {
      demand: 'High Agility & Glycogen Synthesis',
      split: { carbs: '55%', protein: '25%', fats: '20%' },
      calories: '3,100 kcal',
      hydration: '3.6L Electrolyte Complex',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Rice Pudding & Raisins', items: 'Rice pudding, organic raisins, honey drizzle' },
        { type: 'Post-Workout Recovery', title: 'Lean Salmon Quinoa', items: 'Grilled salmon, boiled quinoa, steamed beans' },
        { type: 'Power Breakfast', title: 'Eggs & Whole Wheat Toast', items: 'Scrambled eggs, whole wheat toast, avocado slices' },
        { type: 'Tactical Dinner', title: 'Grilled Chicken & Potato', items: 'Chicken breast, baked potato wedges, broccoli' }
      ]
    }
  },
  Gym: {
    overallScore: 91,
    weeklyProgress: [85, 87, 88, 90, 89, 91, 91],
    metrics: [
      { title: 'Strength', value: '92%', percent: 92 },
      { title: 'Repetitions', value: '24 reps', percent: 85 },
      { title: 'Calories Burned', value: '650 kcal', percent: 90 },
      { title: 'Heart Rate', value: '138 BPM', percent: 80 },
      { title: 'Recovery', value: '88%', percent: 88 }
    ],
    strengths: ['Lactate tolerance threshold', 'Consistent lift velocity posture', 'High isometric core strength'],
    improvements: ['Eccentric phase lift control', 'Joint extension flex ranges'],
    aiTips: [
      'Introduce pause-reps to target muscle hypertrophy.',
      'Focus on active recovery days to prevent central fatigue.'
    ],
    trainingSuggestions: [
      'Strength training: 4 sets of 8 repetitions pause-squats.',
      'Hypertrophy: 3 sets of 12 reps lateral raises.'
    ],
    nutrition: {
      demand: 'High Protein & Muscle Build Synthesis',
      split: { carbs: '45%', protein: '35%', fats: '20%' },
      calories: '2,900 kcal',
      hydration: '3.2L Mineral Water',
      meals: [
        { type: 'Pre-Workout Meal', title: 'Rice Flakes & Whey Mix', items: 'Rice flakes, hot water, whey protein scoop, almond flakes' },
        { type: 'Post-Workout Recovery', title: 'Lean Steak & Potatoes', items: 'Beef sirloin, mashed potatoes, green beans' },
        { type: 'Power Breakfast', title: 'Greek Yogurt Oats Bowl', items: 'Greek yogurt, rolled oats, walnut kernels, blueberries' },
        { type: 'Tactical Dinner', title: 'Turkey Mince & Veggies', items: 'Stir-fried turkey mince, zucchini, bell peppers' }
      ]
    }
  }
};

const CircularScore = ({ score, color }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="50" cy="50" r={radius} fill="transparent" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="7" />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth="7"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1, ease: 'easeOut' }}
          strokeLinecap="round"
        />
      </svg>
      <div style={{ position: 'absolute', fontSize: '1.45rem', fontWeight: '900', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
        {score}%
      </div>
    </div>
  );
};

const WeeklyChart = ({ data, color }) => {
  const chartHeight = 80;
  const chartWidth = 320;
  const padding = 10;
  
  const points = data.map((val, idx) => {
    const x = padding + (idx * (chartWidth - padding * 2)) / (data.length - 1);
    const y = chartHeight - padding - ((val - 50) * (chartHeight - padding * 2)) / 50;
    return { x, y };
  });

  const pathD = `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`;
  const areaD = `${pathD} L ${points[points.length - 1].x} ${chartHeight} L ${points[0].x} ${chartHeight} Z`;

  return (
    <div style={{ width: '100%', height: '100px', position: 'relative' }}>
      <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineChartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <path d={areaD} fill="url(#lineChartGradient)" />
        <motion.path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />
        {points.map((p, idx) => (
          <circle
            key={idx}
            cx={p.x}
            cy={p.y}
            r="3.5"
            fill="#FFFFFF"
            stroke={color}
            strokeWidth="2.5"
          />
        ))}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 6px 0', fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.45)', fontWeight: '700' }}>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
        <span>Sun</span>
      </div>
    </div>
  );
};

const SportHeatmap = ({ sport, color }) => {
  const r = parseInt(color.slice(1, 3), 16) || 21;
  const g = parseInt(color.slice(3, 5), 16) || 101;
  const b = parseInt(color.slice(5, 7), 16) || 192;

  const renderOutline = () => {
    switch (sport) {
      case 'Football':
      case 'Hockey':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', border: '1.5px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', background: 'rgba(27, 94, 32, 0.45)' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', borderLeft: '1.5px dashed rgba(255, 255, 255, 0.3)' }}></div>
            <div style={{ position: 'absolute', top: 'calc(50% - 20px)', left: 'calc(50% - 20px)', width: '40px', height: '40px', border: '1.5px solid rgba(255, 255, 255, 0.25)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', top: 'calc(50% - 25px)', left: 0, width: '18px', height: '50px', border: '1.5px solid rgba(255, 255, 255, 0.25)', borderLeft: 'none' }}></div>
            <div style={{ position: 'absolute', top: 'calc(50% - 25px)', right: 0, width: '18px', height: '50px', border: '1.5px solid rgba(255, 255, 255, 0.25)', borderRight: 'none' }}></div>
          </div>
        );
      case 'Basketball':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', border: '1.5px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', background: 'rgba(211, 84, 0, 0.25)' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', borderLeft: '1.5px solid rgba(255, 255, 255, 0.3)' }}></div>
            <div style={{ position: 'absolute', top: 'calc(50% - 20px)', left: 'calc(50% - 20px)', width: '40px', height: '40px', border: '1.5px solid rgba(255, 255, 255, 0.25)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', top: 'calc(50% - 35px)', left: '-15px', width: '35px', height: '70px', border: '1.5px solid rgba(255, 255, 255, 0.25)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', top: 'calc(50% - 35px)', right: '-15px', width: '35px', height: '70px', border: '1.5px solid rgba(255, 255, 255, 0.25)', borderRadius: '50%' }}></div>
          </div>
        );
      case 'Tennis':
      case 'Badminton':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', border: '1.5px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', background: 'rgba(39, 174, 96, 0.3)' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', borderLeft: '1.5px solid rgba(255, 255, 255, 0.4)' }}></div>
            <div style={{ position: 'absolute', top: '15px', bottom: '15px', left: '20%', right: '20%', border: '1px solid rgba(255, 255, 255, 0.25)' }}></div>
          </div>
        );
      case 'Volleyball':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', border: '1.5px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', background: 'rgba(230, 126, 34, 0.3)' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', borderLeft: '2px solid rgba(255, 255, 255, 0.4)' }}></div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '33%', borderLeft: '1.5px solid rgba(255, 255, 255, 0.25)' }}></div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '67%', borderLeft: '1.5px solid rgba(255, 255, 255, 0.25)' }}></div>
          </div>
        );
      case 'Table Tennis':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', border: '1.5px solid rgba(255, 255, 255, 0.25)', borderRadius: '6px', background: 'rgba(30, 58, 138, 0.65)' }}>
            <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, borderTop: '2px solid rgba(255, 255, 255, 0.4)' }}></div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', borderLeft: '1px dashed rgba(255, 255, 255, 0.3)' }}></div>
          </div>
        );
      case 'Cricket':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(46, 125, 50, 0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '120px', height: '28px', background: 'rgba(141, 110, 99, 0.75)', border: '1px solid rgba(255, 255, 255, 0.2)', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                <div style={{ width: '1.5px', height: '12px', background: '#FFFFFF' }}></div>
                <div style={{ width: '1.5px', height: '12px', background: '#FFFFFF' }}></div>
                <div style={{ width: '1.5px', height: '12px', background: '#FFFFFF' }}></div>
              </div>
              <div style={{ display: 'flex', gap: '2px' }}>
                <div style={{ width: '1.5px', height: '12px', background: '#FFFFFF' }}></div>
                <div style={{ width: '1.5px', height: '12px', background: '#FFFFFF' }}></div>
                <div style={{ width: '1.5px', height: '12px', background: '#FFFFFF' }}></div>
              </div>
            </div>
          </div>
        );
      case 'Swimming':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', border: '1.5px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', background: 'rgba(0, 151, 167, 0.4)', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <div style={{ borderBottom: '1.5px dashed rgba(244, 67, 54, 0.4)' }}></div>
            <div style={{ borderBottom: '1.5px dashed rgba(255, 235, 59, 0.4)' }}></div>
            <div style={{ borderBottom: '1.5px dashed rgba(244, 67, 54, 0.4)' }}></div>
          </div>
        );
      case 'Running':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(76, 175, 80, 0.25)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '85%', height: '80%', border: '6px double rgba(192, 57, 43, 0.75)', borderRadius: '35px' }}></div>
          </div>
        );
      case 'Cycling':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(52, 73, 94, 0.45)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '90%', height: '1px', borderTop: '2px dashed rgba(255,255,255,0.4)' }}></div>
          </div>
        );
      case 'Boxing':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', border: '2px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', background: 'rgba(26, 37, 54, 0.65)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '80%', height: '80%', border: '1.5px solid rgba(255,255,255,0.15)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '6px', background: '#F44336' }}></div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '6px', height: '6px', background: '#2196F3' }}></div>
            </div>
          </div>
        );
      case 'Kabaddi':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', border: '1.5px solid rgba(255, 255, 255, 0.2)', borderRadius: '6px', background: 'rgba(230, 126, 34, 0.35)' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', borderLeft: '2px solid rgba(255, 255, 255, 0.4)' }}></div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '25%', borderLeft: '1.5px solid rgba(255, 255, 255, 0.2)' }}></div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '75%', borderLeft: '1.5px solid rgba(255, 255, 255, 0.2)' }}></div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '15%', borderLeft: '1.2px dashed rgba(255, 255, 255, 0.15)' }}></div>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '85%', borderLeft: '1.2px dashed rgba(255, 255, 255, 0.15)' }}></div>
          </div>
        );
      case 'Gym':
        return (
          <div style={{ position: 'relative', width: '100%', height: '100%', background: 'rgba(30, 41, 59, 0.55)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="45" height="75" viewBox="0 0 100 120" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5">
              <circle cx="50" cy="20" r="10" />
              <path d="M 50 30 L 50 70 M 35 42 L 65 42 M 35 42 L 50 30 L 65 42 M 50 70 L 35 105 M 50 70 L 65 105" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const getHeatspots = () => {
    switch (sport) {
      case 'Football':
        return [
          { top: '30%', left: '45%', size: '50px' },
          { top: '65%', left: '35%', size: '60px' },
          { top: '45%', left: '70%', size: '45px' }
        ];
      case 'Cricket':
        return [
          { top: '50%', left: '35%', size: '30px' },
          { top: '50%', left: '50%', size: '42px' },
          { top: '50%', left: '68%', size: '32px' }
        ];
      case 'Basketball':
        return [
          { top: '35%', left: '20%', size: '50px' },
          { top: '50%', left: '80%', size: '45px' },
          { top: '75%', left: '30%', size: '40px' }
        ];
      case 'Tennis':
        return [
          { top: '35%', left: '30%', size: '42px' },
          { top: '65%', left: '70%', size: '48px' }
        ];
      case 'Badminton':
        return [
          { top: '45%', left: '35%', size: '38px' },
          { top: '60%', left: '68%', size: '35px' }
        ];
      case 'Volleyball':
        return [
          { top: '30%', left: '42%', size: '52px' },
          { top: '65%', left: '58%', size: '55px' }
        ];
      case 'Swimming':
        return [
          { top: '18%', left: '30%', size: '40px' },
          { top: '50%', left: '65%', size: '48px' },
          { top: '82%', left: '45%', size: '40px' }
        ];
      case 'Running':
        return [
          { top: '22%', left: '35%', size: '42px' },
          { top: '50%', left: '82%', size: '48px' }
        ];
      case 'Cycling':
        return [
          { top: '50%', left: '35%', size: '42px' },
          { top: '50%', left: '68%', size: '45px' }
        ];
      case 'Boxing':
        return [
          { top: '22%', left: '50%', size: '28px' },
          { top: '45%', left: '42%', size: '32px' },
          { top: '58%', left: '58%', size: '30px' }
        ];
      case 'Kabaddi':
        return [
          { top: '40%', left: '25%', size: '50px' },
          { top: '60%', left: '75%', size: '55px' }
        ];
      case 'Table Tennis':
        return [
          { top: '35%', left: '35%', size: '30px' },
          { top: '65%', left: '65%', size: '35px' }
        ];
      case 'Hockey':
        return [
          { top: '45%', left: '38%', size: '50px' },
          { top: '30%', left: '72%', size: '42px' }
        ];
      case 'Gym':
        return [
          { top: '38%', left: '50%', size: '32px' },
          { top: '72%', left: '44%', size: '28px' },
          { top: '72%', left: '56%', size: '28px' }
        ];
      default:
        return [];
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '140px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', overflow: 'hidden' }}>
      {renderOutline()}
      {getHeatspots().map((hs, idx) => (
        <motion.div
          key={idx}
          style={{
            position: 'absolute',
            top: hs.top,
            left: hs.left,
            width: hs.size,
            height: hs.size,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${color} 0%, rgba(${r}, ${g}, ${b}, 0.25) 45%, transparent 70%)`,
            mixBlendMode: 'screen',
            pointerEvents: 'none'
          }}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.4, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

const TelemetryChart = ({ sport, color }) => {
  const chartHeight = 85;
  const chartWidth = 320;
  const padding = 10;

  const getChartDetails = () => {
    switch (sport) {
      case 'Football':
        return {
          title: 'Ball Velocity Curve (Shot)',
          data: [0, 42, 78, 112, 94, 60, 20],
          type: 'area'
        };
      case 'Cricket':
        return {
          title: 'Bowler Speed Trend (Spell)',
          data: [134, 136, 133, 138, 135, 137, 136],
          type: 'line'
        };
      case 'Basketball':
        return {
          title: 'Vertical Jump Peak Distribution',
          data: [45, 60, 78, 84, 82, 70, 50],
          type: 'bar'
        };
      case 'Tennis':
        return {
          title: 'Forehand Spin Rate (RPM)',
          data: [2100, 2400, 2800, 2600, 2900, 2500, 2700],
          type: 'area'
        };
      case 'Badminton':
        return {
          title: 'Smash Speed Progression',
          data: [260, 285, 312, 295, 310, 275, 305],
          type: 'line'
        };
      case 'Volleyball':
        return {
          title: 'Spike Power Progression (N)',
          data: [650, 780, 820, 790, 810, 740, 800],
          type: 'area'
        };
      case 'Swimming':
        return {
          title: 'Stroke Rate Efficiency (Laps)',
          data: [32, 34, 33, 31, 30, 32, 31],
          type: 'line'
        };
      case 'Running':
        return {
          title: 'Cadence Stability (RPM)',
          data: [172, 175, 176, 178, 175, 177, 176],
          type: 'area'
        };
      case 'Cycling':
        return {
          title: 'Pedal Power Output (W)',
          data: [220, 250, 280, 270, 290, 260, 275],
          type: 'area'
        };
      case 'Boxing':
        return {
          title: 'Combination Impact Force (N)',
          data: [800, 950, 1200, 1100, 1150, 900, 1050],
          type: 'bar'
        };
      case 'Kabaddi':
        return {
          title: 'Raid Speed Profile (m/s)',
          data: [5.2, 5.8, 6.4, 6.1, 6.6, 5.9, 6.3],
          type: 'line'
        };
      case 'Table Tennis':
        return {
          title: 'Ball Spin Rate (RPS)',
          data: [75, 82, 86, 80, 88, 83, 85],
          type: 'area'
        };
      case 'Hockey':
        return {
          title: 'Sweep Stroke Power Index',
          data: [140, 160, 185, 170, 180, 155, 175],
          type: 'line'
        };
      case 'Gym':
        return {
          title: 'Repetition Lift Force (kg)',
          data: [120, 130, 145, 140, 142, 135, 140],
          type: 'bar'
        };
      default:
        return {
          title: 'Performance Telemetry',
          data: [80, 85, 90, 88, 92, 89, 91],
          type: 'line'
        };
    }
  };

  const details = getChartDetails();
  const minVal = Math.min(...details.data) * 0.9;
  const maxVal = Math.max(...details.data) * 1.1;
  const range = maxVal - minVal || 1;

  const points = details.data.map((val, idx) => {
    const x = padding + (idx * (chartWidth - padding * 2)) / (details.data.length - 1);
    const y = chartHeight - padding - ((val - minVal) * (chartHeight - padding * 2)) / range;
    return { x, y, value: val };
  });

  const renderChartGraphic = () => {
    if (details.type === 'bar') {
      const barWidth = (chartWidth - padding * 2) / details.data.length - 6;
      return points.map((p, idx) => {
        const height = chartHeight - padding - p.y;
        return (
          <rect
            key={idx}
            x={p.x - barWidth / 2}
            y={p.y}
            width={barWidth}
            height={Math.max(2, height)}
            fill={color}
            opacity="0.8"
            rx="2"
          />
        );
      });
    }

    const pathD = `M ${points.map(p => `${p.x} ${p.y}`).join(' L ')}`;
    const areaD = `${pathD} L ${points[points.length - 1].x} ${chartHeight} L ${points[0].x} ${chartHeight} Z`;

    return (
      <>
        <defs>
          <linearGradient id={`telemetryGrad-${sport}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0.0" />
          </linearGradient>
        </defs>
        {details.type === 'area' && <path d={areaD} fill={`url(#telemetryGrad-${sport})`} />}
        <motion.path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        {points.map((p, idx) => (
          <circle
            key={idx}
            cx={p.x}
            cy={p.y}
            r="3"
            fill="#FFFFFF"
            stroke={color}
            strokeWidth="1.5"
          />
        ))}
      </>
    );
  };

  return (
    <div style={{ width: '100%', height: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '12px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'rgba(255, 255, 255, 0.55)', marginBottom: '4px' }}>
        {details.title}
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
          {renderChartGraphic()}
        </svg>
      </div>
    </div>
  );
};

const PerformanceAnalysis = ({ selectedSport, onBack }) => {
  const imageSrc = getSportImage(selectedSport);
  const palette = SPORT_PALETTES[selectedSport] || { primary: '#1565C0', secondary: '#00B8D4' };
  const sportData = SPORTS_PERFORMANCE_DATABASE[selectedSport];

  if (!sportData) {
    return <div style={{ color: '#FFFFFF', padding: '40px' }}>Loading {selectedSport} details...</div>;
  }

  // Parse colors for custom style properties
  const r = parseInt(palette.primary.slice(1, 3), 16);
  const g = parseInt(palette.primary.slice(3, 5), 16);
  const b = parseInt(palette.primary.slice(5, 7), 16);

  const wrapperStyles = {
    '--victory-blue': palette.primary,
    '--electric-cyan': palette.secondary,
    '--victory-blue-alpha': `rgba(${r}, ${g}, ${b}, 0.15)`,
    '--victory-blue-shadow': `rgba(${r}, ${g}, ${b}, 0.35)`
  };

  return (
    <div className="analysis-wrapper" style={wrapperStyles}>
      
      {/* Blurred background image backdrop using clean homepage photo */}
      <div 
        className="blurred-bg-overlay"
        style={{ backgroundImage: `url('/assets/A_diverse_group_of_elite_202606301909.jpeg')` }}
      />

      <div className="analysis-container" style={{ maxWidth: '1080px', padding: '40px 24px' }}>
        
        {/* Back Button */}
        <button className="back-button" onClick={onBack} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#FFFFFF' }}>
          <ArrowLeft size={16} /> Back to Gallery
        </button>

        {/* Compact Hero Banner */}
        <div className="hero-banner-analysis" style={{ height: '320px', borderRadius: '16px', marginBottom: '32px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <img src={imageSrc} alt={selectedSport} className="hero-banner-image" />
          <div className="hero-banner-glass-overlay" style={{ padding: '30px', background: 'linear-gradient(180deg, rgba(11, 15, 25, 0) 20%, rgba(11, 15, 25, 0.85) 100%)' }}>
            <h1 className="hero-banner-title" style={{ fontSize: '2.4rem', fontWeight: '900', letterSpacing: '-1px' }}>
              {selectedSport} Performance
            </h1>
            <p className="hero-banner-tagline" style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.85)', margin: 0 }}>
              Biometric telemetry and sports-science database profiles.
            </p>
          </div>
        </div>

        {/* Top Summary Row (Overall Score & Weekly Progress) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', marginBottom: '32px' }}>
          
          {/* Overall Performance Card */}
          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px' }}>
            <CircularScore score={sportData.overallScore} color="var(--victory-blue)" />
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '4px' }}>Overall Score</h3>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', margin: 0 }}>Biomechanical composite rating</p>
            </div>
          </div>

          {/* Weekly Progress Card */}
          <div className="glass-panel" style={{ padding: '20px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>Weekly Progress</h3>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--victory-blue)', background: 'var(--victory-blue-alpha)', padding: '2px 8px', borderRadius: '4px' }}>
                7-Day Trend
              </span>
            </div>
            <WeeklyChart data={sportData.weeklyProgress} color="var(--victory-blue)" />
          </div>

        </div>

        {/* Heatmap & Telemetry Analysis Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
          {/* Heatmap Card */}
          <div className="glass-panel" style={{ padding: '20px 24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Activity Heatmap</h3>
            <SportHeatmap sport={selectedSport} color="var(--victory-blue)" />
          </div>

          {/* Telemetry Analysis Card */}
          <div className="glass-panel" style={{ padding: '20px 24px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px' }}>Telemetry Analysis</h3>
            <TelemetryChart sport={selectedSport} color="var(--victory-blue)" />
          </div>
        </div>

        {/* Minimal Performance Metrics Grid */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px', fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>
            Key Metrics
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {sportData.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                className="metric-card-premium"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="metric-card-title">
                    {metric.title}
                  </span>
                  <div className="metric-card-icon-wrapper">
                    {getMetricIcon(metric.title)}
                  </div>
                </div>
                <div className="metric-card-value" style={{ margin: '8px 0 12px 0' }}>
                  {metric.value}
                </div>
                
                {/* Horizontal Progress Bar */}
                <div style={{ height: '4px', width: '100%', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                  <motion.div 
                    style={{ height: '100%', background: 'var(--victory-blue)', borderRadius: '2px' }}
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.percent}%` }}
                    transition={{ duration: 0.8, delay: idx * 0.05 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strengths & Areas to Improve */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
          
          {/* Strengths Card */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <CheckCircle size={18} color="#00C853" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>Strengths</h3>
            </div>
            <ul style={{ paddingLeft: '20px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sportData.strengths.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Areas to Improve Card */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <AlertCircle size={18} color="#FFD600" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>Areas to Improve</h3>
            </div>
            <ul style={{ paddingLeft: '20px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sportData.improvements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* AI Recommendations & Training Suggestions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
          
          {/* AI Tips Card */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Sparkles size={18} color="var(--electric-cyan)" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>AI Performance Tips</h3>
            </div>
            <ul style={{ paddingLeft: '20px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sportData.aiTips.map((tip, idx) => (
                <li key={idx}>{tip}</li>
              ))}
            </ul>
          </div>

          {/* Training Suggestions Card */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Activity size={18} color="var(--victory-blue)" />
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#FFFFFF', margin: 0 }}>Training Suggestions</h3>
            </div>
            <ul style={{ paddingLeft: '20px', color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {sportData.trainingSuggestions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Simple Nutrition Section */}
        <NutritionSection nutrition={sportData.nutrition} />

      </div>
    </div>
  );
};

export default PerformanceAnalysis;
