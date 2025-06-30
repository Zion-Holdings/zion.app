from bug_logger import log_bug
import sys # Required for sys.exc_info()
import os

# Ensure bug_log.json is clean for this example run
# In a real app, you wouldn't typically delete it like this every time.
if os.path.exists("bug_log.json"):
    os.remove("bug_log.json")

def risky_division(a, b):
    """Performs division and logs an error if division by zero occurs."""
    print(f"Attempting {a} / {b}")
    try:
        result = a / b
        print(f"Result: {result}")
        return result
    except ZeroDivisionError:
        log_bug(
            error_message=f"Attempted division by zero: {a}/{b}",
            severity="High",
            module="main_app.py/risky_division",
            exc_info=sys.exc_info(), # Captures stack trace and exception details
            environment="Test Environment, Python 3.x"
        )
        print("Logged a ZeroDivisionError.")
        return None

def process_data(data_packet):
    """Processes a data packet and logs issues if data is malformed."""
    print(f"Processing data: {data_packet}")
    if not isinstance(data_packet, dict):
        log_bug(
            error_message="Invalid data packet type.",
            severity="Medium",
            module="main_app.py/process_data",
            expected_behavior="data_packet should be a dictionary.",
            actual_behavior=f"Received type: {type(data_packet).__name__} with value: {data_packet}",
            environment="Test Environment, Python 3.x"
        )
        print("Logged an invalid data packet type.")
        return {"status": "error", "reason": "Invalid type"}

    if "id" not in data_packet:
        log_bug(
            error_message="Missing 'id' field in data packet.",
            severity="Warning",
            module="main_app.py/process_data",
            steps_to_reproduce="Send a dictionary without an 'id' key.",
            actual_behavior=f"Packet keys: {list(data_packet.keys())}",
            environment="Test Environment, Python 3.x"
        )
        print("Logged a missing 'id' field.")
        # Continue processing but it's a logged issue

    print(f"Data packet with ID '{data_packet.get('id', 'N/A')}' processed partially/fully.")
    return {"status": "processed", "id": data_packet.get("id")}

def simulate_unexpected_error():
    """Simulates an unexpected runtime error."""
    print("Simulating an unexpected error...")
    try:
        my_list = [1, 2, 3]
        # This will cause an IndexError
        print(my_list[5])
    except Exception: # Catching a broad exception to simulate the unexpected
        log_bug(
            error_message="An unexpected error occurred during list access.", # More specific than default
            severity="Critical",
            module="main_app.py/simulate_unexpected_error",
            exc_info=sys.exc_info(), # Crucial for unexpected errors
            environment="Test Environment, Python 3.x"
        )
        print("Logged an unexpected error.")

if __name__ == "__main__":
    print("--- Starting Example Application ---")

    # Scenario 1: Risky division - success
    risky_division(10, 2)

    # Scenario 2: Risky division - failure (division by zero)
    risky_division(5, 0)

    # Scenario 3: Process data - invalid type
    process_data("This is not a dictionary")

    # Scenario 4: Process data - missing field (warning)
    process_data({"name": "test_item", "value": 42})

    # Scenario 5: Process data - valid (for this example)
    process_data({"id": "12345", "payload": "some data"})

    # Scenario 6: Simulate an unexpected error
    simulate_unexpected_error()

    print("\n--- Example Application Finished ---")
    print(f"Check 'bug_log.json' for the logged errors.")

    # Optionally, print the content of bug_log.json to console
    if os.path.exists("bug_log.json"):
        try:
            with open("bug_log.json", "r") as f:
                print("\n--- Content of bug_log.json ---")
                print(f.read())
                print("--- End of bug_log.json ---")
        except Exception as e:
            print(f"Could not read bug_log.json: {e}")
