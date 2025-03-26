import Resume from '@/components/resume';
import resumeData from '@/components/resume/data/index';

const ResumePage = () => {
  return (
    <main>
      <Resume data={resumeData} />
    </main>
  );
};

export default ResumePage;
