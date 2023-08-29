export default function Bio() {
  return (
    <div className="mx-auto w-80 md:w-96 space-y-5 my-8">
      <p className="text-2xl font-bold w-fit border-b-4 border-gray-600 dark:border-white">
        Bio
      </p>

      <div className="flex space-x-10 md:space-x-34 justify-center leading-loose">
        <div className="font-bold">
          <p>2003</p>
          <p>2009</p>
          <p>04/2021</p>
          <p>
            10/2021 <br /> - present
          </p>
        </div>

        <div>
          <p>Born in Phu Ly, Ha Nam</p>
          <p>Started living in Hanoi</p>
          <p>Got IELTS 6.0 Certificate</p>
          <p>
            Studying Computer Science <br /> program at Thuy Loi University
          </p>
        </div>
      </div>
    </div>
  );
}
