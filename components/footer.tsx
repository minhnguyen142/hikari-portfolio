const date = new Date()

export default function Footer() {
    return (
      <div className="text-center p-6">
        <p className="text-gray-400">
          &copy; {date.getFullYear()} Mochizuki Hikari. All right reserved.
        </p>
      </div>
    );
}