public class EliteModeSettingsService
{
    private string selectedBackground = "Login"; // Default value
    private string selectedTargetColor = "Red";  // Default value
    private string selectedMusicChoice = "Member"; // Default value

    public event Action OnBackgroundChanged;
    public event Action OnTargetChanged;
    public event Action OnMusicChanged;

    public string SelectedBackground
    {
        get => selectedBackground;
        set
        {
            if (selectedBackground != value)
            {
                selectedBackground = value;
                OnBackgroundChanged?.Invoke(); // Trigger event when the background changes
            }
        }
    }

    public string SelectedTargetColor
    {
        get => selectedTargetColor;
        set
        {
            if (selectedTargetColor != value)
            {
                selectedTargetColor = value;
                OnTargetChanged?.Invoke(); // Trigger event when the target color changes
            }
        }
    }

    public string SelectedMusicChoice
    {
        get => selectedMusicChoice;
        set
        {
            if (selectedMusicChoice != value)
            {
                selectedMusicChoice = value;
                OnMusicChanged?.Invoke(); // Trigger event when the music choice changes
            }
        }
    }

    public string GetMusicTrack()
    {
        return SelectedMusicChoice switch
        {
            "Member" => "music/Black Suit 1a.mp3",
            "Secure" => "music/Tag.mp3",
            "Mainframe" => "music/Deus Theme.mp3",
            "Classified" => "music/MJ-x-x part 2.mp3",
            "Gateway" => "music/Track44.mp3",
            _ => "music/MJ-x-x part 2.mp3"
        };
    }
}
